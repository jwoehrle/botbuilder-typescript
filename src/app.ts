import * as restify from 'restify';
import * as builder from 'botbuilder';



const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});
const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
const bot = new builder.UniversalBot(connector, function (session) {
    let message = session.message.text ? session.message.text : '';
    if ( message.toLocaleLowerCase().indexOf('time') > -1) {
        let now = new Date();
        session.send("The current time is %s", now.getHours() + ":" + now.getMinutes());
    } else {
        session.send("You said: %s", session.message.text);
    }
});
