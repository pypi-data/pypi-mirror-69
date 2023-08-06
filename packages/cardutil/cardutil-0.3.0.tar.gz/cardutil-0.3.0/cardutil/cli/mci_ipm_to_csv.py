import argparse

from cardutil.cli import add_version
from cardutil.config import config
from cardutil.mciipm import IpmReader
from cardutil.outputter import dicts_to_csv


def cli_entry():
    cli_run(**vars(cli_parser().parse_args()))


def cli_run(**kwargs):
    if not kwargs.get('out_filename'):
        kwargs['out_filename'] = kwargs['in_filename'] + '.csv'

    with open(kwargs['in_filename'], 'rb') as in_ipm:
        with open(kwargs['out_filename'], 'w', encoding=kwargs['out_encoding']) as out_csv:
            mci_ipm_to_csv(in_ipm=in_ipm, out_csv=out_csv, **kwargs)


def cli_parser():
    parser = argparse.ArgumentParser(prog='mci_ipm_to_csv', description='Mastercard IPM to CSV')
    parser.add_argument('in_filename')
    parser.add_argument('-o', '--out-filename')
    parser.add_argument('--in-encoding', default='ascii')
    parser.add_argument('--out-encoding', default='ascii')
    parser.add_argument('--no1014blocking', action='store_true')
    add_version(parser)

    return parser


def mci_ipm_to_csv(in_ipm, out_csv, in_encoding='ascii', no1014blocking=False, **_):
    """
    Create a csv file given an input Mastercard IPM file

    :param in_ipm: binary input IPM file object
    :param out_csv: output csv file object
    :param in_encoding: input file encoding string
    :param no1014blocking: set True if no 1014 blocking used
    :return: None
    """
    blocked = not no1014blocking
    dicts_to_csv(IpmReader(in_ipm, encoding=in_encoding, blocked=blocked), config['output_data_elements'], out_csv)
