## Webpage Monitor

Command line interface app that monitors for changes on a given webpage and notifies the desired recipients using either phone or email.

## Setup
You need [Node](https://nodejs.org/) installed on your local machine.

You will need to add a Twilio accountID and authToken to the code below if you wish to send notifications using SMS:
```
const accountID = 'TWILIO ACCOUNT ID HERE';
const authToken = 'TWILIO AUTH TOKEN HERE';
```

You will need to setup an email to send notifications from if you wish to send notifications using email:
```
let sender = 'ENTER EMAIL HERE';
let password = 'ENTER PASSWORD HERE';
```

Without either of these, notifications only will be shown in the console.

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
