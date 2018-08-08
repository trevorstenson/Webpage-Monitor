#!/usr/bin/env node

const track = require('./track');
const program = require('commander');

program
    .version('0.1.0')
    .description('Monitor the given webpage for changes')
    .arguments('<url>')
    .option('-p, --phone <number>', 'Notification phone number')
    .option('-e, --email <address>', 'Notification email address')
    .action(function (url, args) {
        track.track(url, args);
    });

program.parse(process.argv);