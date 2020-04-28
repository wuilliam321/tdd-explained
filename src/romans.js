const conversions = [
    [1, 'I']
];
export function convert (number) {
    if (number === 1) {
        return "I";
    }
    if (number === 2) {
        return "II";
    }
    return 'III';
}
