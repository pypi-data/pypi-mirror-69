import setuptools

with open("README.md", 'r') as readme:
    long_description = readme.read()

setuptools.setup(

    name='pyhelpers',
    version='1.1.2',

    author='Qian Fu',
    author_email='qian.fu@outlook.com',

    description="A toolkit of helper functions to facilitate data manipulation.",
    long_description=long_description,
    long_description_content_type="text/markdown",

    url='https://github.com/mikeqfu/pyhelpers',

    install_requires=[
        # 'gdal',
        'fuzzywuzzy',
        # 'matplotlib',
        # 'nltk',
        'numpy',
        # 'openpyxl',
        'pandas',
        # 'pdfkit',
        # 'psycopg2',
        'python-rapidjson',
        # 'pyproj',
        # 'pyxlsb',
        # 'requests',
        # 'shapely',
        'sqlalchemy',
        'sqlalchemy-utils',
        'tqdm',
        # 'xlrd',
        # 'xlwt',
        # 'XlsxWriter'
    ],

    packages=setuptools.find_packages(exclude=["*.tests", "tests.*", "tests"]),

    package_data={"pyhelpers": ["../README.md", "../requirements.txt", "../LICENSE"]},
    include_package_data=True,

    classifiers=[
        'License :: OSI Approved :: GNU General Public License v2 or later (GPLv2+)',
        'Programming Language :: Python :: 3',
        'Operating System :: Microsoft :: Windows',
        'Operating System :: POSIX :: Linux'
    ],
)
