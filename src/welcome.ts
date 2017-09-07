import {Session} from 'botbuilder';

export function welcome(session: Session) {
    let message = session.message.text ? session.message.text : '';
    if (message.toLocaleLowerCase().indexOf('time') > -1) {
        session.send('The current time is %s', new Date(Date.now()).toTimeString());
    } else {
        session.send('You said: %s', session.message.text);
    }
}


export function testable(): string {
    return 'Hello World!';
}
