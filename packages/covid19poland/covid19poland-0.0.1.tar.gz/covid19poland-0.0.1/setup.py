
import setuptools
with open("README.md", "r", encoding="UTF-8") as fh:
    long_description = fh.read()

setuptools.setup(
  name = 'covid19poland',
  version = '0.0.1',
  author = 'Martin Beneš',
  author_email = 'martinbenes1996@gmail.com',
  description = 'Web Scraper for Poland COVID19 data.',
  long_description = long_description,
  long_description_content_type="text/markdown",
  packages=setuptools.find_packages(),
  license='GPL',
  url = 'https://www.covid19datahub.io/',
  download_url = 'https://github.com/martinbenes1996/covid19poland/archive/0.0.1.tar.gz',
  keywords = ['2019-nCov', 'poland', 'coronavirus', 'covid-19', 'covid-data', 'covid19-data'],
  install_requires=[],
  package_dir={'': '.'},
  classifiers=[
    'Development Status :: 3 - Alpha',
    'Intended Audience :: Science/Research',
    'Intended Audience :: Developers',
    'Intended Audience :: Other Audience',
    'Topic :: Database',
    'Topic :: Scientific/Engineering',
    'Topic :: Scientific/Engineering :: Information Analysis',
    'Topic :: Software Development :: Libraries',
    'Topic :: Utilities',
    'License :: OSI Approved :: GNU General Public License (GPL)',
    'Programming Language :: Python :: 3',
    'Programming Language :: Python :: 3.4',
    'Programming Language :: Python :: 3.5',
    'Programming Language :: Python :: 3.6',
  ],
)