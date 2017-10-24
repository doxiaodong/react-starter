import { encode, decode } from '.';

describe('utils', () => {
    test('ssr encode and decode', () => {
        expect(decode(encode({ a: 1, b: 2 }))).toEqual({ a: 1, b: 2 });
    });

    test('alg', () => {
        expect(encode({ a: 1, b: 2 })).toBe(
            'eMKcwqtWSlTCsjLDlFFKUsKyMsKqBQAWw7YDRw=='
        );

        expect(encode(null)).toBe(null);
        expect(encode(undefined)).toBe(undefined);
        expect(decode(null)).toBe(null);
        expect(decode(undefined)).toBe(undefined);
    });
});
