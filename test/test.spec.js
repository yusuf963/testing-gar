const assert = require("assert");

const value = 4;
const message = "on the train";
const message1 = true;
const message2 = 0;

describe("Parent describe block", () => {
  beforeEach(() => {
    // console.log('before each')
  });

  describe("#index 1", () => {
    it("should return -1 when the value is not present", () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it.skip("should fail", () => {
      throw new Error("failed");
    });
    it("should pass", () => {
      assert.equal(value, 4);
    });
  });

  describe("#index 2", () => {
    it("should return - when the value is not present", () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it("value should match number 3", () => {
      assert.notEqual(value, 3);
    });
    it("should 1 equal to 1", () => {
      assert.equal(1, 1);
    });
    it("should match the message", () => {
      assert.match(message, /i/g);
    });
    it("should message be truthy value", () => {
      assert.ok(message1); // value should evaluate to true  and not any of false undefined null 0
    });
    it("should match"
    
    , () => {
      assert.throws(() => {});
    }
    );
  });



});
