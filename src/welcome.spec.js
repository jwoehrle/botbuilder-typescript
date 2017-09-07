"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var welcome_1 = require("./welcome");
var anything = jasmine.anything;
var Mock = jest.fn(function () { return ({
    send: jest.fn(),
    message: {
        text: "Hello World"
    }
}); });
test('Should echo what we pass in', function () {
    var mock = new Mock();
    welcome_1.welcome(mock);
    expect(mock.send).toBeCalledWith('You said: %s', mock.message.text);
});
test('Should give the current time', function () {
    var mock = new Mock();
    mock.message.text = "Time";
    welcome_1.welcome(mock);
    expect(mock.send).toBeCalledWith('The current time is %s', anything());
});
