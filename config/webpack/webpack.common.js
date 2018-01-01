const path = require('path');

/**
 * 1. loader
 * 2. bundling
 * 3. minify
 * 4. concat
 */


module.exports = {
  entry: {
      app: './src/index.js'
  },
  output : {
      path: path.resolve(__dirname, '../../dist'),
      filename: '[name].bundle.js'
  },
  module : {
      rules : [
          {
              test: /\.css$/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
          }
      ]
  }
};