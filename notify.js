const accountID = 'AC2f5e79c87d10ce4f974c75814b9746c1';
const authToken = '2a267800b251c622082446878fb8bf47';
const client = require('twilio')(accountID, authToken);
const nodemailer = require('nodemailer');

function sendText(number, message) {
    client.messages
        .create({
            body: message,
            from: '+17606217190',
            to: number
        })
        .then(message => console.log(message.sid))
        .done(function () {
            console.log('SMS sent');
        });
}

function sendEmail(address, message) {
    let sender = 'ENTER EMAIL HERE';
    let password = 'ENTER PASSWORD HERE';
    let transporter = nodemailer.createTransport({
        host: 'gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: sender,
            pass: password
        }
    });
    let mailOptions = {
        from: sender,
        to: address,
        subject: 'Change detected',
        text: message,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        } else {
            console.log('Email sent');
        }
    });
}

function notify(args) {
    let msg = 'Change detected!';
    if (args.phone) {
        sendText(args.phone, msg);
    }
    if (args.address) {
        sendEmail(args.address, msg);
    }
}

module.exports.notify = notify;