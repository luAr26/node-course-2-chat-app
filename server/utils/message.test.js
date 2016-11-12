var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Jen',
        text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location mesage object', () => {
    var from = 'John',
        lat = 39.833851,
        lng = -74.871826,
        url = `https://google.com/maps?q=${lat},${lng}`;
    var message = generateLocationMessage(from, lat, lng);
    expect(message.createdAt).toBeA('number');
    expect(message.from).toBe(from);
    expect(message).toInclude({from, url});
  });
});
