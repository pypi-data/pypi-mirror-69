# Expansion

What started out as a simple generative art project and experiment, built off of numpy, 
has now become an API, specifically pertaining to a point(s) reproducing in an image, 
with changing colors, and even environment-sensitive reproduction, with obstacles.

### Quick start

Use the command `$ pip install expansion-raj-csh` to install.
If this fails, you might have to prefix the command with `python3 -m` on MacOS/Linux,
or `python -m` on Windows. If that fails, try changing `pip` to `pip3`,
or use the `--user` argument just before `-r`.

### Prerequisites

This package depends on several other Python packages, these include:

- numpy,
- opencv-python,
- pillow/PIL,
- pygame


These can be installed in one command, with the `requirements.txt` file:

`$ pip install -r requirements.txt`

If this fails, you might have to prefix the command with `python3 -m` on MacOS/Linux,
or `python -m` on Windows. If that fails, try changing `pip` to `pip3`,
or use the `--user` argument just before `-r`.

Consult the official [Python Packaging Authority (PyPA)](https://pip.pypa.io/en/stable/) website for a detailed guide on how to use pip.


It is recommended to create a virtual environment before installing, to ensure that
there are no conflicts with the system-wide python installation, or if administrator
permissions are unavailable This can be done with the `$ python3 -m venv <ENVIRONMENT_NAME>`
or `$ python -m venv <ENVIRONMENT_NAME>`commands, depending on the OS, where
`<ENVIRONMENT_NAME>` is the name of the virtual environment.
This can be activated with the `$ source <ENVIRONMENT_NAME>/bin/activate` command on Unix,
or the `<ENVIRONMENT_NAME>\Scripts\activate.bat` command on Windows.

Consult the official [Python](https://docs.python.org/3/library/venv.html) website for a detailed guide on how to use venv.

### Installing from source

1. Ensure that you have Python 3 installed on your system.

You can test this by running `$ python3 --version` on the command line.
If this fails, try running `$ python --version` and seeing if you get
a version number that begins with a 3, e.g. `Python 3.8.2`.

If that fails, it most likely means that Python 3 is not installed on your system.

To install Python 3, go to the Downloads page of the [Python](https://www.python.org/downloads/) website,
and make sure you install Python 3.

2. Check that pip is installed.

You can test this by running `$ pip --version` on the command line.
If this fails, you might have to prefix the command with `python3 -m` on MacOS/Linux,
or `python -m` on Windows. If that fails, try changing `pip` to `pip3`.

If that fails, it most likely means that pip is not installed on your system.

To install pip, follow the guide on the [Python Packaging Authority (PyPA)](https://pip.pypa.io/en/stable/installing/) website.

3. (Optional)(Recommended) Create a virtual environment via venv.

Navigate to your desired directory, by running `$ cd <DIRECTORY>` on the command line.
Then create the virtual environment with the `$ python3 -m venv <ENVIRONMENT_NAME>` or
the `$ python -m venv <ENVIRONMENT_NAME>` commands.
This can be activated with the `$ source <ENVIRONMENT_NAME>/bin/activate` command on Unix,
or the `<ENVIRONMENT_NAME>\Scripts\activate.bat` command on Windows. It can then be deactivated
via the `$ deactivate` command.

4. Clone the git repository.

This can be done via the `git clone https://github.com/Raj-CSH/Expansion.git` command,
if git is installed on your system. This can be checked via the `$ git --version` command.

If that fails, it most likely means git is not installed on your system.

To install git, follow the guide on the [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) website.

5. Install the dependencies via pip.

First, activate your virtual environment as shown above.
Then, run the command `$ cd Expansion` to navigate to the repository directory.
Finally, run the command `$ pip install -r requirements.txt` to install the dependencies.

6. Build via setuptools.

In the same directory as `setup.py`, run the `$ python3 setup.py sdist bdist_wheel` or  the `$ python setup.py sdist bdist_wheel`
commands, depending on your OS. This will generate a 'dist' folder, containing the '.whl' file that can be installed via pip.


7. Install the wheel.

Navigate into the dist folder via the command `$ cd dist`. Then run `$ pip install expansion_raj_csh-<VERSION_NUMBER>-py3-none-any.whl`,
where `<VERSION_NUMBER>` is the version of the expansion package. This can be checked by looking at the version number in the filename of the wheel.


## Author

* **Rajarshi Mandal**  - [Raj-CSH](https://github.com/Raj-CSH)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* Inspired by the [r/generative](https://www.reddit.com/r/generative/) subreddit.
