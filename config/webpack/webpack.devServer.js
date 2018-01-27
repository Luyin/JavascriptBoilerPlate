const path = require('path');
const dev = require('./webpack.dev');
const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const HOST = '0.0.0.0';
const PORT = 3000;

module.exports = merge(dev,{
    plugins: [
        // BrowserSync 실행시, devServer 옵션은 무시됨
        new BrowserSyncPlugin({
            host: HOST,
            port: PORT,
            server: { baseDir: ['www'] }
        }, {
            reload: false //webpack이 reload 하도록 양도
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true, //gzip 사용 여부
        port: PORT,
        host: HOST,
        inline: false, //수정 사항 발생시, 전체 페이지 새로고침
        hot: true, //수정 사항 발생시, 부분 새로고침
        open: 'Google Chrome', //서버 실행시, 브라우저 자동 실행
        stats: {
            colors: true // console 컬러로 출력
        },
    }
});