import {expect} from 'chai';
import {square} from '../src/test'

describe('square', () => {
    it('should square the number', () => {
        expect(square(2)).to.equal(4);
    });
});
