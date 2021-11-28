import { plus4lodash, plus4sum } from './index.js'
import _ from "lodash"
import { expect, test } from '@jest/globals';
import op from './sum'


//==== Prep external module for mock ====

jest.mock('lodash')


// ==== mock internal module ====

jest.mock('./sum.js', () => ({
    sum: jest.fn((a, b) => 8)
}));

// ==============================


test('2 x 4 is not equal 2 + 4', () => {
    _.sum.mockImplementation((a, b) => a * b)
    expect(plus4lodash(2)).not.toBe(6);
});

test('plus4sum', () => {
    expect(op.sum(4)).toBe(8)
})

test('plus4Sum check op.sum function being called with params 2, 4', () => {
    plus4sum(2)
    expect(op.sum).toHaveBeenCalledWith(2, 4)
})
