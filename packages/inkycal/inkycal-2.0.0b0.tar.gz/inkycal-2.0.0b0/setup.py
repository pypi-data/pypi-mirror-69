from setuptools import setup

__project__ = "inkycal"
__version__ = "2.0.0beta"
__description__ = "Python3 software for syncing icalendar events, weather and news on selected E-Paper displays"
__packages__ = ["inkycal"]
__author__ = "aceisace"
__author_email__ = "aceisace63@yahoo.com"
__url__ = "https://github.com/aceisace/Inky-Calendar"

__install_requires__ = ['pyowm>=2.10.0',                  # weather
                        'Pillow>=7.1.1' ,                 # imaging
                        'icalendar==4.0.6',               # iCalendar parsing
                        'recurring-ical-events==0.1.16b0',# parse recurring events
                        'feedparser==5.2.1',              # parse RSS-feeds
                        'numpy>=1.18.3',                  # image pre-processing
                        'arrow>=0.15.6'                   # time handling
                        ]

__classifiers__ = [
    "Development Status :: 3 - Alpha",
    "License :: OSI Approved :: GNU General Public License v3 (GPLv3)",
    "Intended Audience :: Education",
    "Programming Language :: Python :: 3 :: Only",
]

                
setup(
    name = __project__,
    version = __version__,
    description = __description__,
    packages = __packages__,
    author = __author__,
    author_email  = __author_email__,
    url = __url__,
    install_requires = __install_requires__,
    classifiers = __classifiers__,
)
