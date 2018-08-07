const request = require('request');
const cheerio = require('cheerio');
const checksum = require('checksum');
const CronJob = require('cron').CronJob;
const notify = require('./notify');

function track(url, args) {
    let base = '';
    getSiteChecksum(url).then(function (res) {
        base = res;
    });

    let tracker = new CronJob({
        cronTime: '00 */1 * * * *',
        onTick: function () {
            getSiteChecksum(url).then(function (res) {
                let current = res;
                if (current !== base) {
                    console.log('Change detected! Notifying recipients...');
                    notify.notify(args);
                    base = current;
                }
            });
        },
        start: false,
        timeZone: 'America/Los_Angeles'
    });
    tracker.start();
    console.log('Monitor started...');
}

async function getSiteChecksum(url) {
    let promise = new Promise(function (resolve, reject) {
        request(url, function (error, response, body) {
            if (error) {
                reject(console.error(error));
            } else {
                let page = cheerio.load(body);
                resolve(checksum(page.text()));
            }
        })
    });
    return await promise;
}

module.exports.track = track;