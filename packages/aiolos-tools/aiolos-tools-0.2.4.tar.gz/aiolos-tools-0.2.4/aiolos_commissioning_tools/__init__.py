"""
Change log:

    since version number will increment automatically using bumpversion, even if 
    nothing in this package changes, not all version numbers will be present in 
    the below table


    Version             Date                Description             Contributer
    -------             ----                -----------             -----------
    0.2.4               02.2020             initial relase          c.sooriyakumaran 



"""
import logging

# initiate logging for the commissioning package
logging.getLogger(__name__).addHandler(logging.NullHandler())
# package information
#__all__      = ['lib', 'hotwire', 'pressure', 'plotting', "units", 'NOZZLE', 'PLENUM', 'wind_speed_control_method']
__author__  = "c. Sooriyakumaran <Christopher@aiolos.com>"
__status__  = "development"
__version__ = "0.2.4"
__date__    = "October 2019"

NOZZLE = 1
PLENUM = 0

wind_speed_control_method = {
    "NOZZLE": NOZZLE,
    "nozzle": NOZZLE,
    "PC2": NOZZLE,
    "pc2": NOZZLE,
    "PLENUM": PLENUM,
    "plenum": PLENUM,
    "PC3": PLENUM,
    "pc3": PLENUM,
    "PPL": PLENUM,
    "ppl": PLENUM,
    NOZZLE: "Nozzle Method",
    PLENUM: "Plenum Method"
}
