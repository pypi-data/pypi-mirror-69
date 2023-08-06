from distutils.core import setup
from setuptools import find_packages

setup(
    name='testUploadMyPython',  # How you named your package folder (MyLib)
    packages=['sampleKafka', 'sampleKafka.common.utils', 'sampleKafka.consumer','sampleKafka.consumer.utils', 'sampleKafka.producer'],
    # packages=find_packages(),
    version='1.1',  # Start with a small number and increase it with every change you make
    license='MIT',  # Chose a license from here: https://help.github.com/articles/licensing-a-repository
    description='Sample pip package',  # Give a short description about your library
    author='KHALIDH AHAMED',  # Type in your name
    author_email='khalidh.ahamed@mrcooper.com',  # Type in your E-Mail
    keywords=['SAMPLE', 'FORMAT', 'PIP'],  # Keywords that define your package best
    install_requires=[
    ],  # I get to this in a second
    classifiers=[
        'Development Status :: 3 - Alpha',
        # Chose either "3 - Alpha", "4 - Beta" or "5 - Production/Stable" as the current state of your package
        'Intended Audience :: Developers',  # Define that your audience are developers
        'Topic :: Software Development :: Build Tools',
        'License :: OSI Approved :: MIT License',  # Again, pick a license
        'Programming Language :: Python :: 3.5'
    ],
)
