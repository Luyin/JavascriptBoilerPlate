const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

/**
 * 1. loader
 * 2. bundling
 * 3. minify
 * 4. concat
 */


module.exports = {
    entry: {
      main: ['./src/index.ts']
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            /**
             *  JS Bundle 모듈 내에 inline 모드
             */
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'style-loader', // Javascript String을 Style node로 변환하여 생성
            //         'css-loader',   // CSS를 CommonJS로 불러들일 수있도록 Javascript String 형태로 변형
            //         'sass-loader'   // Sass 를 컴파일하여 CSS 변환
            //     ]
            // },
            /**
             *   CSS 파일 분리 모드
             */
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
            },
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name]-one.css' //output.path 경로 아래에 생성된다.
        }),
        new CleanWebpackPlugin(path.resolve(__dirname, '../../dist'))
    ]
};