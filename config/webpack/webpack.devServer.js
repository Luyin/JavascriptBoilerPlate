const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true, //gzip 사용 여부
        port: 9000,
        host: '0.0.0.0',
        inline: false, //수정 사항 발생시, 전체 페이지 새로고침
        hot: true, //수정 사항 발생시, 부분 새로고침
        open: 'Google Chrome', //서버 실행시, 브라우저 자동 실행
        stats: {
            colors: true // console 컬러로 출력
        },
    }
};