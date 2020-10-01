module.exports = {
    extends: [ ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    env: {
        node: true,
        jquery: true,
        es2017: true,
        browser: true,
        webextensions: true,
    },
    rules: {
        'no-trailing-spaces': 'error',
        'eol-last': 'error'
    },
};
