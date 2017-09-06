import * as restify from 'restify';
import * as builder from 'botbuilder';



const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
    let message = session.message.text ? session.message.text : '';
    if ( message.toLocaleLowerCase().indexOf('uhr') > -1) {
        session.send("Es ist jetzt: %s", new Date());
    } else {
        session.send("You said: %s", session.message.text);
    }

});