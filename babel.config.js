module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
    ignore: [
        '**/__tests__',
        '**/*.spec.js',
        '**/*.test.js',
    ]
};