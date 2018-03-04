const path = require('path');
const common  = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = Object.assign({}, common, {
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Javascript Boiler Plate',
      template: './markup/index.html',
      filename: 'index.html',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, '../../dist')
    })
  ]
});
