import { convert } from './romans';

const conversions = [
    [5, 'V'],
    [4, 'IV'],
    [3, 'III'],
    [2, 'II'],
    [1, 'I'],
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
