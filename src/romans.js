const conversions = [
    [1, 'I']
];
export function convert (number) {
    let roman;
    let arabic;
    const conversion = conversions.find(([x]) => x <= number);
    if (conversion) {
        [arabic, roman] = conversion;
        roman += convert(number - arabic);
    }
    return roman;
}
