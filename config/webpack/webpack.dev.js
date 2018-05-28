const path = require('path');
const common  = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const HOST = '0.0.0.0';
const PORT = 3000;

module.exports = Object.assign({}, common, {
  mode: 'development',
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
  ],
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    contentBase: path.join(__dirname, '../../dist'),
    compress: true,
    open: `http://localhost:${PORT}`,
  }
});
