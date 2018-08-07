#!/usr/bin/env node

const track = require('./track');
const program = require('commander');

program
    .version('0.1.0')
    .description('Track changes on webpages');

program
    .command('track <url>')
    .alias('t')
    .description('Monitor the given webpage for changes')
    .option('-p, --phone <number>', 'Notification phone number')
    .action(function (url, args) {
        track.track(url, args);
    });

program.parse(process.argv);