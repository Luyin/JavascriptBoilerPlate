const path = require('path');

module.exports = {
    entry: {
        app : './src/index.js',
        app2 : './src/index.js'
    },
    devtool: 'inline-source-map',
    output: {
        //[hash]는 전체파일을 기준으로 hash를 계산하므로 모든 entry가 값이 동일하다.
        //[chunkhash]는 entry 마다 hash를 계산하므로 entry마다 값이 다르다.
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist') //어째서 path를 사용하는 것이지???
    },
    module: {
        rules: [
            {
                test: /\.css$/, //정규표현식으로 나타낸다.
                use: [
                    // Loader는 파일들을 전처리 할때 사용 하는 것이다.
                    //CSS 파일들을 Javascript Module로 불러오기 위해서는 style-loader와 css-loader가 필요하다.
                    'style-loader',
                    'css-loader' //Import문으로 CSS를 로딩하고 CSS 코드를 리턴한다.
                ]
            }]
    }
};