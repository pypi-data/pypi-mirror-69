#!/usr/bin/env python3

import os
import sys
import argparse
import logging
from time import sleep
from .config import load_config
from .mqtt2influxdb import Mqtt2InfluxDB

__version__ = '1.4.0'
LOG_FORMAT = '%(asctime)s %(levelname)s: %(message)s'


def main():
    argp = argparse.ArgumentParser(description='MQTT to InfluxDB')
    argp.add_argument('-c', '--config', help='path to configuration file (YAML format)', required=True)
    argp.add_argument('-D', '--debug', help='print debug messages', action='store_true')
    argp.add_argument('-o', '--output', help='output log messages to file')
    argp.add_argument('-t', '--test', help='test parse config', action='store_true')
    argp.add_argument('-d', '--daemon', help='on connection error instead of exiting just wait for some time and try again', action='store_true')
    argp.add_argument('-v', '--version', action='version', version='%(prog)s ' + __version__)
    args = argp.parse_args()

    log_file = None
    if args.output:
        log_file = args.output

    logging.basicConfig(level=logging.DEBUG if args.debug else logging.INFO, format=LOG_FORMAT, filename=log_file)

    try:
        config = load_config(args.config)

        if args.test:
            print("The configuration file seems ok")
            return

        try:
            Mqtt2InfluxDB(config)
        except KeyboardInterrupt:
            return
        except Exception as e:
            if not args.daemon:
                raise
            logging.error(e)
            logging.info('Suspending for 30 seconds')
            sleep(30)
    except Exception as e:
        logging.error(e)
        if os.getenv('DEBUG', False):
            raise e
        sys.exit(1)


if __name__ == '__main__':
    main()
