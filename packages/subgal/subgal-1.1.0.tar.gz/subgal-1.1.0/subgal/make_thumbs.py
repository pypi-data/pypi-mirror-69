#!/usr/bin/env python3

import sys
import re
import itertools
import collections
import os
from PIL import Image
import magic
import subprocess
import hashlib
import json
from itertools import chain
from collections import defaultdict


__doc__ = """
Usage: subgal make-thumbs [options] [-x <path> ...] [-b <600x400> ...] [-v ...]

Options:
  -r, --root-dir=<DIR>            Directory full of images and videos
                                  to make thumbnails of.  [DEFAULT: {1}]
  -t, --thumb-root-dir=<DIR>      Directory to populate with directories
                                  full of thumbnails (named for the hash
                                  of each image).  [DEFAULT: {2}]
  -d, --dry-run                   Don't actually write any files
  -f, --force                     Overwrite existing thumbnails.
  -x, --exclude=<filename>        Directory/filename to exclude (you
                                  can list multiple by passing
                                  "-x one -x two" etc.
  -X, --excludes-file=<filename>  File with one filename/dirname
                                  per line to be excluded
  -v, --verbosity                 Number of v's is level of verbosity
                                  (No -v results in silence, -vvvv is
                                  super verbose)
  -c, --corr-file=<filename.json> json matching original filenames to
                                  tuples of paths to thumbnails will be put in
                                  <filename.json>  [DEFAULT: correlations.json]
  -b, --bounding-box=<600x400>    Bounding box for thumbnails.  Any two numbers
                                  separated by an 'x'.  Multiple -b's yields
                                  multiple sizes of thumbnails.  If no -b
                                  arguments are given, defaults to
                                  "-b 1000x1000 -b 300x300".
""".format(sys.argv[0],
        os.path.join("./images"),
        os.path.join("./thumbs"))


from docopt import docopt


def vprint(given_verbosity, verbosity, string):
  if given_verbosity <= verbosity:
    print(string)


def mkdir_exist(dirname, dryrun=False, *, verbosity=1):
  """
  Create directory named `dirname`, *not* throwing
  an exception if it already exists.
  Do nothing but make logging noise if `dryrun` is
  True
  """
  v = verbosity

  if os.path.isdir(dirname):
    vprint(1, v, "Not creating {} (already exists)".format(dirname))
    return

  if os.path.exists(dirname):
    errmsg = "ERROR: {} already exists and isn't a directory".format(dirname)
    vprint(0, v, errmsg)
    raise TypeError(errmsg)

  if dryrun:
    vprint(1, v, "Not creating {} (dryrun)".format(dirname))
    return

  vprint(1, v, "Creating {}".format(dirname))
  os.makedirs(dirname)


def main(argv):
  args = docopt(__doc__, version='2.0.0', argv=argv)

  json_filename = args["--corr-file"]

  if json_filename == None:
    json_filename = "correlations.json"

  correspondence = {}

  dryrun = args["--dry-run"]

  force = args["--force"]

  verbosity = args["--verbosity"]
  v = verbosity

  image_root_dir_name = args["--root-dir"]
  if not os.path.isdir(image_root_dir_name):
    print("{} isn't a directory tree".format(image_root_dir_name))
    exit(1)

  thumb_root_dir_name = args["--thumb-root-dir"]
  try:
    mkdir_exist(thumb_root_dir_name, dryrun=dryrun)
  except TypeError as e:
    print(f"'{thumb_root_dir_name}' already exists and isn't a directory")
    exit(1)

  excluded_dirnames = args["--exclude"]
  excluded_filenames = args["--exclude"]
  excludes_filename = args["--excludes-file"]

  if excludes_filename is not None:
    with open(excludes_filename) as f:
      for line in f:
        line = line.rstrip()
        if os.path.isdir(line):
          excluded_dirnames.append(line)
        if os.path.isfile(line):
          excluded_filenames.append(line)
      excluded_filenames.append(excludes_filename)

  bounds = args["--bounding-box"]

  size_tuples = []
  if bounds == []:
    size_tuples.append((300, 300))
    size_tuples.append((1000, 1000))
  else:
    for bound in bounds:
      try:
        (x, y) = bound.split("x")
        size_tuples.append((int(x), int(y)))
      except ValueError as e:
        print(f"'-b {bound}' isn't of the format '-b 123x456'")
        continue

  if size_tuples == []:
    print(f"No well-formatted bounding boxes given.  Give something like ")
    print(f"'-b 132x456' or give none and take a default")
    exit(1)

  # Actually do stuff

  for (curdir, subdirs, filenames) in os.walk(image_root_dir_name,
      topdown=True):
    subdirs[:] = [
      d
      for d in subdirs
      if d not in excluded_dirnames
    ]
    for filename in filenames:
      if filename not in excluded_filenames:
        cur_path = os.path.normpath(os.path.join(curdir, filename))
        if not can_be_thumbnailed(cur_path):
          vprint(2, v, "{} not an image or video -- skipping.".format(cur_path))
          continue

        if dryrun:
          vprint(2, v, "Would deal with {} (dryrun)".format(cur_path))
        else:
          deal_with(cur_path, thumb_root_dir_name, verbosity=v,
            size_tuples=size_tuples,
            force=force, dryrun=dryrun, correspondence=correspondence)

  # If json_filename already exists, merge new stuff into it
  if os.path.exists(json_filename):
    vprint(1, verbosity, f"{json_filename} already exists.  Merging new "
        "information into it")
    with open(json_filename, "r") as f:
      already_there = json.load(f)
      correspondence = combine_dicts(already_there, correspondence)

  if dryrun:
    vprint(2, v, f"Would create {json_filename} (dryrun)")
  else:
    vprint(2, v, f"Writing {json_filename}")
    with open(json_filename, "w") as f:
      json.dump(correspondence, f, sort_keys=True, indent=2)


def test_combine_dicts():
  x = {
    1: {2: 3, 4: 5, 6: 7},
    8: {9: 10},
    11: {12: 13, 14: 15},
    16: {17: 18},
    19: {},
    20: {},
    21: {22: 23},
  }
  y = {
    1: {2: 24, 4: 5, 8: 19},
    2: {25: 26},
    19: {27: 28, 29: 30},
    23: {},
  }
  combined = combine_dicts(x, y)
  assert(combined == {
    1: {2: 24, 4: 5, 8: 19, 6: 7, 8: 19},
    2: {25: 26},
    8: {9: 10},
    11: {12: 13, 14: 15},
    16: {17: 18},
    19: {27: 28, 29: 30},
    20: {},
    21: {22: 23},
    23: {},
  })


# TODO Do this efficiently
def combine_dicts(x, y):
  to_return ={}
  only_in_x = set(x.keys()).difference(y.keys())
  only_in_y = set(y.keys()).difference(x.keys())
  in_both = set(x.keys()).intersection(y.keys())

  for key in only_in_x:
    to_return[key] = {}
    for subkey in x[key]:
      to_return[key][subkey] = x[key][subkey]

  for key in only_in_y:
    to_return[key] = {}
    for subkey in y[key]:
      to_return[key][subkey] = y[key][subkey]

  for key in in_both:
    to_return[key] = {}
    for subkey in x[key]:
      to_return[key][subkey] = x[key][subkey]
    for subkey in y[key]:
      to_return[key][subkey] = y[key][subkey]
  return to_return


def can_be_thumbnailed(path):
  return is_an_image(path) or is_a_video(path)


def is_an_image(path):
  return (magic.from_file(path, mime=True).split("/")[0] == "image")


def is_a_video(path):
  return (magic.from_file(path, mime=True).split("/")[0] == "video")


def sha256sum(filename):
  h = hashlib.sha256()
  b = bytearray(128 * 1024)
  mv = memoryview(b)
  with open(filename, 'rb', buffering=0) as f:
    for n in iter(lambda: f.readinto(mv), 0):
      h.update(mv[:n])
  return h.hexdigest()


def deal_with(filename, thumb_root_dir_name, verbosity=0, size_tuples=None,
    force=False, dryrun=False, correspondence=None):
  """
  @returns (path_of_filename, paths_of_thumbnails) on success
  """
  vprint(2, verbosity, f"Dealing {filename}")
  if size_tuples == None:
    size_tuples = [(120, 120)]

  # TODO Handle collisions
  hashhex = sha256sum(filename)
  if correspondence != None:
    correspondence[filename] = {}

  thumb_dir = os.path.join(thumb_root_dir_name, hashhex)
  vprint(1, verbosity, f"  Putting thumbs in {thumb_dir}")

  mkdir_exist(thumb_dir, dryrun=dryrun, verbosity=verbosity)

  for size_tuple in size_tuples:
    s_dimension = f"{size_tuple[0]}x{size_tuple[1]}"
    thumb_path = os.path.join(thumb_dir, f"{s_dimension}.jpg")
    vprint(1, verbosity, f"    Creating {s_dimension} thumb at {thumb_path}")

    # Notice adding to correspondence even if thumb was previously created
    # This ensures ever noticed thumbnail is accounted for.
    if correspondence != None:
      correspondence[filename][s_dimension] = thumb_path

    if os.path.exists(thumb_path) and not force:
      vprint(1, verbosity, f"{thumb_path} already exists.  If you want it "
          "clobbered, pass -f flag.")
      continue

    try:
      create_thumbnail(filename, thumb_path, size_tuple, verbosity)
    except OSError as e:
      vprint(1, verbosity, f"Error thumbnailing {filename}: {str(e)}")
      return
    except ValueError as e:
      vprint(1, verbosity, f"I can tell {filename} is an image file, but the image library I use cannot handle it.  (Got error {str(e)})")
      return
    except IOError as e:
      vprint(1, verbosity, f"I can tell {filename} is an image file, but the image library I use cannot handle it.  (Got error {str(e)})")
      return
    except ZeroDivisionError as e:
      vprint(1, verbosity, f"I can tell {filename} is an image file, but the image library I use cannot handle it.  (Got error {str(e)})")
      return


def create_thumbnail_from_image(filename, thumb_filename, size_tuple):
  im = Image.open(filename)
  im.thumbnail(size_tuple)
  im.save(thumb_filename)


def create_thumbnail_from_video(filename, thumb_filename, size_tuple, verbosity=1):
  big_thumb_filename = thumb_filename + "meta.png"
  cmdline = ["ffmpeg", "-i", filename, "-ss", "00:00:01.000", "-vframes", "1", big_thumb_filename]
  vprint(1, verbosity, "{0}".format(" ".join(cmdline)))
  if verbosity > 1:
    subprocess.run(cmdline, check=True)
  else:
    subprocess.run(cmdline, check=True, stderr=subprocess.PIPE)

  create_thumbnail_from_image(big_thumb_filename, thumb_filename,
      size_tuple)
  vprint(1, verbosity, f"Deleting {big_thumb_filename}")
  os.remove(big_thumb_filename)


def create_thumbnail(filename, thumb_filename, size_tuple, verbosity=1):
  if is_an_image(filename):
    create_thumbnail_from_image(filename, thumb_filename, size_tuple)
  elif is_a_video(filename):
    create_thumbnail_from_video(filename, thumb_filename, size_tuple, verbosity)


if __name__ == "__main__":
  main(sys.argv)
