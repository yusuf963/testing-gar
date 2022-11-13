const assert = require('assert');
const expect = require('chai').expect;
const value = 4;
const message = 'on the train';
const message1 = true;
const message2 = 0;

describe('Parent describe block', () => {
  beforeEach(() => {
    // console.log('before each')
  });

  describe('#index 1', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('should fail', () => {
      const callfunc = () => {
        throw new Error('error');
      };
      expect(callfunc).to.throw();
    });
    it('should pass', () => {
      assert.equal(value, 4);
    });
  });


  describe('#index 2', () => {
    it('should return - when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('value should match number 3', () => {
      assert.notEqual(value, 3);
    });
    it('should 1 equal to 1', () => {
      assert.equal(1, 1);
    });
    it('should match the message', () => {
      assert.match(message, /i/g);
    });
    it('should message be truthy value', () => {
      assert.ok(message1);
    });
    it('should pass if func throw an error', () => {
      // use a call back function to test if the function throws an error
      const callCheckout = () => {
        throw new Error('failed');
      };
      expect(callCheckout).to.throw();
    });
  });




});
