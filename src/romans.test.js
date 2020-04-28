import { convert } from './romans';

const conversions = [
    [5000, '(V)'],
    [4000, 'M(V)'],
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [20, 'XX'],
    [10, 'X'],
    [9, 'IX'],
    [6, 'VI'],
    [5, 'V'],
    [4, 'IV'],
    [3, 'III'],
    [2, 'II'],
    [1, 'I'],
    [3424, 'MMMCDXXIV'],
];
describe('convert arabic to romans', () => {
    conversions.map(([arabic, roman]) => {
        it(`convert ${arabic} to ${roman}`, () => {
            const param = arabic;

            const result = convert(param);

            expect(result).toBe(roman);
        });
    });
});

const invalidValues = [
    [5001, 'arabic should be <= 5000'],
    [undefined, 'number is required'],
    [null, 'number is required'],
];
describe('convert out of limits', () => {
    // Roman domain: arabic > 0 AND N <= 5000
    // Limits: <= 0, > 5000
    invalidValues.map(([invalid, msg]) => {
        it(`convert with '${invalid}' value`, () => {
            const param = invalid;
            const error = new Error(msg);

            expect(() => {
                convert(param);
            }).toThrow(error);
        });
    });
});
