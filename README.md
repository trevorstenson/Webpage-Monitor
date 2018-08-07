## Webpage Monitor

Command line interface app that monitors for changes on a given webpage and notifies the desired recipients using either phone or email.

## Installation
You need [Node](https://nodejs.org/) installed on your local machine.

Run `npm install -g sitemonitor`

## Usage

Run the program using:

```
Command:
  $ monitor [OPTIONS]

Example:
  $ monitor https://github.com/ --phone +12345678901

Options:
  -p --phone           Send a text to the given phone number when a change is detected
  -e --email           Send an email to the given email address when a change is detected
```
