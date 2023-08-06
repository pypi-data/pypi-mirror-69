#!/usr/bin/env python
# coding: utf-8
import os
import signal
import sys

from scripts.batch import batch_parser
from scripts.parser import Area, TYPES


def getopts():
    import argparse
    import textwrap

    """
    Get the command line options.
    """
    parser = argparse.ArgumentParser(
        formatter_class=argparse.RawDescriptionHelpFormatter,
        description=textwrap.dedent("""\
        Get geojson with coordinates of area by cadastral number.
        https://pkk.rosreestr.ru/
        """)
    )
    parser.add_argument('-c', '--code', action='store', type=str, required=False,
                        help='area cadastral number')
    parser.add_argument('-t', '--area_type', action='store', type=int, required=False, default=1,
                        help='area types: %s' % "; ".join(["%s:%s" % (k, v) for k, v in list(TYPES.items())]))
    parser.add_argument('-p', '--path', action='store', type=str, required=False,
                        help='media path')
    parser.add_argument('-o', '--output', action='store', type=str, required=False,
                        help='output path')
    parser.add_argument('-l', '--list', action='store', type=str, required=False,
                        help='path of file with cadastral codes list')
    parser.add_argument('-d', '--display', action='store_const', const=True, required=False,
                        help='display plot (only for --code mode)')
    parser.add_argument('-D', '--delay', action='store', type=int, required=False, default=1,
                        help='delay between request (only for --list mode)')
    parser.add_argument('-r', '--refresh', action='store_const', const=True, required=False,
                        help='do not use cache')
    parser.add_argument('-e', '--epsilon', action='store', type=float, required=False, default=5,
                        help='parameter specifying the approximation accuracy'
                             'This is the maximum distance between the original curve and its approximation. '
                             'Small value = high detail = more points. '
                             '(default %(default).2f)')
    parser.add_argument('-C', '--center_only', action='store_const', const=True, required=False,
                        help='use only the center of area')
    parser.add_argument('-P', '--proxy', action='store_const', const=True, required=False,
                        help='use proxies')
    opts = parser.parse_args()

    return opts


def _main():
    # area = Area("38:36:000021:1106")
    # area = Area("38:06:144003:4723")
    # area = Area("38:36:000033:375")
    # area = Area("38:06:143519:6153", area_type=5)
    # 47:16:0650002:317  # multipolygon

    # code, output, path, epsilon, area_type = "38:06:144003:4723", "", "", 5, 1)
    opt = getopts()
    code = opt.code
    output = opt.output if opt.output else os.path.join("output")
    delay = getattr(opt, "delay", 1000)
    kwargs = {
        "media_path": opt.path,
        "with_proxy": opt.proxy,
        "epsilon": opt.epsilon if opt.epsilon else 5,
        "area_type": opt.area_type if opt.area_type else 1,
        "center_only": opt.center_only if opt.center_only else False,
        "use_cache": False if opt.refresh else True,
        "coord_out": "EPSG:4326",
    }

    if opt.list:
        file_name = os.path.splitext(os.path.basename(opt.list))[0]
        f = open(opt.list, 'r')
        codes = f.readlines()
        # cadastral number like this 02:00:000000 is not valid
        # def code_filter(c):
        #     s = re.search('^\d\d:\d+:[0]+', c)
        #     return not s
        # codes = filter(code_filter, codes)
        f.close()
        batch_parser(codes, output=output, delay=delay, file_name=file_name, **kwargs)

    elif code:
        get_by_code(code, output, display=opt.display, **kwargs)


def get_by_code(code, output, display, **kwargs):
    area = Area(code, **kwargs)
    abspath = os.path.abspath(output)
    geojson = area.to_geojson_poly()
    if geojson:
        filename = '%s.geojson' % area.file_name.replace(":", "_")
        geojson_path = os.path.join(abspath, "geojson")
        if not os.path.isdir(geojson_path):
            os.makedirs(geojson_path)
        file_path = os.path.join(geojson_path, filename)
        f = open(file_path, 'w')
        f.write(geojson)
        f.close()
        print("Vector - {}".format(file_path))
        if display:
            area.show_plot()
    return area


def main():
    def signal_handler(signalnum, frame):
        print('You pressed Ctrl+C')
        sys.exit(0)

    signal.signal(signal.SIGINT, signal_handler)
    print('Press Ctrl+C to exit')

    _main()


if __name__ == "__main__":
    main()
