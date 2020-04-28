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
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
];

function validateNumber (number) {
    if (number === undefined ||
        number === null ||
        typeof (number) !== "number" ||
        Number.isNaN(Number(number))) {
        throw new Error('number is required');
    }
    if (number > 5000) {
        throw new Error('arabic should be <= 5000');
    }
}


function findBestConversion (number) {
    return conversions.find(([arabic]) => arabic <= number);
}

export function convert (number) {
    validateNumber(number);

    if (number <= 0) {
        return '';
    }
    let roman, arabic;
    const conversion = findBestConversion(number);
    if (conversion) {
        [arabic, roman] = conversion;
        roman += convert(number - arabic);
    }
    return roman;
}
