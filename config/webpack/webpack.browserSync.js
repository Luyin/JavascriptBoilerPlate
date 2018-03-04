const dev = require('./webpack.dev');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const HOST = '0.0.0.0';
const PORT = 3000;

module.exports = Object.assign({}, {
    plugins: [
        // BrowserSync 실행시, devServer 옵션은 무시됨
        new BrowserSyncPlugin({
          host: HOST,
          port: PORT,
          server: { baseDir: ['dist'] }
        }, {
          reload: true
        })
    ]
}, dev);

/**
 * Object.assign 으로 webpack 객체 merge 할 때, 처음 추가된 객게의 plugins이 가장 나중에 실행 된다.
 */