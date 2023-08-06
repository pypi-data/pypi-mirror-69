import argparse
import shlex
import re

from comiccompiler import version


def parse(input=None):
    parser = argparse.ArgumentParser(prog="Comic Compiler",
                                     description="Given a set of images, vertically combines them in to 'pages' where "
                                                 "the start/end of the page are solid white (or some other specified "
                                                 "colour).")
    parser.add_argument("--version", action="version",
                        version="%(prog)s v" + version.full)

    parser.add_argument("-m", "--min-height-per-page", default="5000px", type=page_height_formats,
                        help="The minimum allowed pixel height for each output page")
    parser.add_argument("-M", "--min-height-last-page", default="0px", type=page_height_formats,
                        help="The minimum allowed pixel height for the last output page. If the last page is less "
                             "than this height, it will be combined in to the previous page.")
    parser.add_argument("-i", "--input-file-prefix", default="image", type=str,
                        help="[DEPRECATED] Use the -f parameter instead; "
                             "Will only combine images that start with this text")
    parser.add_argument("-f", "--input-files", default=["image*.jpg"], type=str, nargs="+",
                        help="Will only combine files whose names match the given list of exact names or "
                             "regex patterns")
    parser.add_argument("-e", "--extension", default=".jpg", type=str,
                        help="The file extension of your output page files.")
    parser.add_argument("-o", "--output-file-prefix", default="page", type=str,
                        help="The text that will go at the start of each output page name prior to the 3 digit zero "
                             "padded page number.")
    parser.add_argument("-osn", "--output-file-starting-number", default=1, type=int,
                        help="The number of the first output page.")
    parser.add_argument("-ow", "--output-file-width", default=0, type=int,
                        help="The explicit width of the output pages. If no value is given, or a value of 0 is given, "
                             "then the output pages will be the same width as the first input image.")
    parser.add_argument("-id", "--input-directory", default="./", type=str,
                        help="[DEPRECATED] Include your directory path in the -f parameter instead; "
                             "The path to the directory you want to collect image files from.")
    parser.add_argument("-od", "--output-directory", default="./Compiled/", type=str,
                        help="The path to the directory you want to put the new page files in.")
    parser.add_argument("-b", "--breakpoint-detection-mode", default=-1, type=int,
                        help="The 'mode' that the script uses to detect where to split up pages. Mode 0 will split pages "
                             "when an input image ends in a breakpoint colour. Mode 1 will scan through out the input "
                             "images to find a breakpoint.")
    parser.add_argument("-bb", "--breakpoint-buffer", default="20px", type=breakpoint_buffer_formats,
                        help="When in Breakpoint Detection Mode #1 this value controls how much space to try to leave "
                             "between the last known non-breakpoint area and the actual breakpoint itself.")
    parser.add_argument("-bi", "--break-points-increment", default=10, type=int,
                        help="When in Breakpoint Detection Mode #1 this value controls how often the script tests a line "
                             "in an image file for a breakpoint.")
    parser.add_argument("-bm", "--break-points-multiplier", default=20, type=int,
                        help="When in Breakpoint Detection Mode #1 this value controls how large of a vertical area is "
                             "pre-tested for a breakpoint before iterating over rows via Breakpoint Row Check Increments.")
    parser.add_argument("-c", "--split-on-colour", default=[0, 65535], type=int, nargs="+",
                        help="The list of decimal notation colours you want to split on. Use 65535 for white, 0 for black, "
                             "or any number in that range for your intended colour.")
    parser.add_argument("-C", "--additional-split-on-colour", default=[], type=int, nargs="+",
                        help="The list of decimal notation colours you want to split on in addition to the provided "
                             "defaults in SPLIT_ON_COLOUR.")
    parser.add_argument("-ce", "--colour-error-tolerance", default=0, type=int,
                        help="The error tolerance used when testing whether a specific image/row matches the given "
                             "breakpoint colour")
    parser.add_argument("-csd", "--colour-standard-deviation", default=0, type=int,
                        help="The maximum allowed standard deviation in colour values when testing for a breakpoint.")
    parser.add_argument("--exit", action="store_true",
                        help="If set, when the program finishes compiling it will prompt you to press enter before "
                             "terminating itself.")
    parser.add_argument("--clean", action="store_true",
                        help="If set, before the new pages are compiled the program will delete the configured output "
                             "directory.")
    parser.add_argument("--open", action="store_true",
                        help="If set, after the new pages are compiled the program will open the directory it was working "
                             "in via windows explorer.")

    parser.add_argument("-l", "--logging-level", default=2, type=int, help="Sets logging level")
    parser.add_argument("--error", action="store_true", help="Turns on error level logging")
    parser.add_argument("--info", action="store_true", help="Turns on info level logging")
    parser.add_argument("--warn", action="store_true", help="Turns on warn level logging")
    parser.add_argument("--debug", action="store_true", help="Turns on debug level logging")
    parser.add_argument("--verbose", action="store_true", help="Turns on verbose level logging")

    parser.add_argument("--gui", action="store_true", help="Opens a GUI prepopulated with the given arguments")
    parser.add_argument("--disable-input-sort", action="store_true",
                        help="Prevent the input list from being resorted alphanumerically prior to stitching.")
    parser.add_argument("--enable-stitch-check", action="store_true",
                        help="Prevent the input list from being scanned and checked for images that do not appear to "
                             "have matching connections.")

    if input is None:
        args = parser.parse_args()
    elif type(input) is list:
        args = parser.parse_args(input)
    else:
        args = parser.parse_args(args=shlex.split(input))

    args.split_on_colour += args.additional_split_on_colour

    if args.error:
        args.logging_level = 0
    if args.info:
        args.logging_level = 1
    if args.warn:
        args.logging_level = 2
    if args.debug:
        args.logging_level = 3
    if args.verbose:
        args.logging_level = 4

    if args.input_files is None or len(args.input_files) == 0:
        args.input_files = [args.input_file_directory + "image*" + args.extension]

    return args


def get_defaults():
    return parse([])


pattern_pixels = "^[0-9]+(px)*$"
pattern_ratio = "^[0-9]+:[0-9]+$"
pattern_fraction = "^[0-9]+\\/[0-9]+$"
pattern_percent = "^[0-9]{1,3}%$"


def page_height_formats(arg_value):
    return validate_patterns(arg_value, [pattern_pixels, pattern_ratio, pattern_fraction, pattern_percent])


def breakpoint_buffer_formats(arg_value):
    return validate_patterns(arg_value, [pattern_pixels, pattern_percent])


def matches(arg_value, pattern):
    return matches_any(arg_value, [pattern])


def matches_any(arg_value, patterns):
    pat = re.compile("|".join(patterns))
    if not pat.match(arg_value):
        return False
    return True


def validate_patterns(arg_value, patterns):
    if matches_any(arg_value, patterns):
        return arg_value
    raise argparse.ArgumentTypeError
