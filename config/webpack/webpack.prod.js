const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = Object.assign({}, common, {
  plugins: [
    new UglifyJSPlugin()
  ]
});
