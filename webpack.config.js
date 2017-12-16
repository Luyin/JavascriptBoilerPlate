const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'test_bundle.js',
        path: path.resolve(__dirname, 'dist') //어째서 path를 사용하는 것이지???
    }
};