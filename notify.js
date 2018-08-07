const accountID = 'AC2f5e79c87d10ce4f974c75814b9746c1';
const authToken = '2a267800b251c622082446878fb8bf47';
const client = require('twilio')(accountID, authToken);

function sendText(number, message) {
    client.messages
        .create({
            body: message,
            from: '+17606217190',
            to: number
        })
        .then(message => console.log(message.sid))
        .done();
}

function notify(args) {
    let msg = 'Change detected!';
    if (args.phone) {
        sendText(args.phone, msg);
    }
}

module.exports.notify = notify;