const common = require('./webpack.common.js');

module.exports = Object.assign({}, common, {
  mode: 'production',
  optimization: {
      minimize: true,   //UglifyJsPlugin 계승
      splitChunks: {}   //CommonsChunkPlugin 계승
  }
});
