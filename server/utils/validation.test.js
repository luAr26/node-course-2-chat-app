const expect = require('expect');
const {isRealString} = require('./validation');

// import isRealString

// isRealString
  // should reject non string values
  // should reject strings with only spaces
  // should allow strings with non-space characters

describe('isRealString', () => {
  it ('should reject non string values', () => {
    var response = isRealString(98);
    expect(response).toBe(false);
  });
  it('should reject strings with only spaces', () => {
    var response = isRealString('    ');
    expect(response).toBe(false);
  });
  it('should allow strings with non-space characters', () => {
    var response = isRealString('  John  ');
    expect(response).toBe(true);
  })
});
