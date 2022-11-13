const expect = require('chai').expect
const utils = require('../utilities');

describe('utilities',()=>{
    it('should return the second word when asked for the first parameter',()=>{
        let firstParameter = utils.getArgument('command argument', 1);
        expect(firstParameter).to.eq('argument');
    })
})