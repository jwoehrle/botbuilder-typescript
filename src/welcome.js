"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function welcome(session) {
    var message = session.message.text ? session.message.text : '';
    if (message.toLocaleLowerCase().indexOf('time') > -1) {
        session.send('The current time is %s', new Date(Date.now()).toTimeString());
    }
    else {
        session.send('You said: %s', session.message.text);
    }
}
exports.welcome = welcome;
function testable() {
    return 'Hello World!';
}
exports.testable = testable;
