const conversions = [
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
];
export function convert (number) {
    if (number <= 0) {
        return '';
    }
    let roman;
    let arabic;
    const conversion = conversions.find(([x]) => x <= number);
    if (conversion) {
        [arabic, roman] = conversion;
        roman += convert(number - arabic);
    }
    return roman;
}
