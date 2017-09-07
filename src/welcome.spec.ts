import {Session} from 'botbuilder';
import {welcome} from './welcome';
import anything = jasmine.anything;

const Mock = jest.fn<Session>(() => ({
    send: jest.fn(),
    message: {
        text: "Hello World"
    }
}));

test('Should echo what we pass in', () => {
    let mock = new Mock();
    welcome(mock);
    expect(mock.send).toBeCalledWith('You said: %s', mock.message.text);
});

test('Should give the current time', () => {
    let mock = new Mock();
    mock.message.text = "Time";
    welcome(mock);
    expect(mock.send).toBeCalledWith('The current time is %s', anything());
});
