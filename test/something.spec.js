const expect = require('chai').expect
const should = require('chai').should()

describe('generate random number from 1 to 10',()=>{
    let randomNumber
    let value = true

    it('should generate a random number',()=>{
        randomNumber = Math.floor(Math.random() * 10) + 1;
        expect(randomNumber).to.be.at.least(1);
        expect(randomNumber).to.be.at.most(10);
    })
    it('should return the length of array',()=>{
        const array = [1,2,3,4,5,6,7,8,9,10];
        expect(array).to.have.lengthOf(10);
    })
    it('should the random number natural number and less than 10 ',()=>{
        expect(randomNumber).to.be.a('number');
    })
    it('randomNumber should be true value',()=>{
        value.should.be.true
    })

})