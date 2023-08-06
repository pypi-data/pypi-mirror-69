# Itarj Console

Itarj Console is a CLI application created with python. This application is aimed at reducing the rate at which internet users fall for job scams. Users of the application can be able to search the database for Job openings that have been flagged as **scams**.

## Features

Itarj Console provides the following features:

* Beautiful User interface:

  We know that console applications can look plain sometimes. So we decided to spice it up with some colour
* Users can create posts, these posts will be uploaded to the database and other users will be able to see it.
* Users can also search the database for posts using keyword, and the results will be automatically returned through a website on the browser.

## Installation

Requirements to install this application are:
- Python: This can be downloaded from [Python.org](https://www.python.org)
- pip: pip comes bundled with Python 2 >=2.7.9 or Python 3 >=3.4 but if pip isnt installed then check [pip.pypa.io](https://pip.pypa.io) for installation of pip

if the requirements have been passed, users can install Itarj Console by running this command:

```
pip install ItarjConsole==0.3.1
```

After successful installation, to start the application, run the following commands:

```
python
```

Import the ItarjConsole package

```python
import ItarjConsole
```

Call the function to start the application:

```python
ItarjConsole.sql_conection()
```


## Download application

This application is only available for download on windows for now. The CLI executable for windows doesnt require users to have python installed on their local machines. Work is in progress to make it available for other platforms. 
The application can be downloaded from [Releases](https://github.com/startng/forward-itarj-damianson/releases)