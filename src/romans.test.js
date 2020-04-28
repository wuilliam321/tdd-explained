import { convert } from './romans';

describe('convert arabic to romans', () => {
    it('convert 1 to I', () => {
        const arabic = 1;

        const result = convert(arabic);

        expect(result).toBe('I');
    });

    it('convert 2 to II', () => {
        const arabic = 2;

        const result = convert(arabic);

        expect(result).toBe('II');
    });

    it('convert 3 to III', () => {
        const arabic = 3;

        const result = convert(arabic);

        expect(result).toBe('III');
    });
});
