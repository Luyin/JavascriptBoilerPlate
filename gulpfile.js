const gulp = require('gulp');
const del = require('del');
const log = require('fancy-log');
const webpack = require ('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackDevConfig = require('./config/webpack/webpack.dev');
const webpackDevServerConfig = require('./config/webpack/webpack.devServer');
const webpackProdConfig = require('./config/webpack/webpack.prod');

/**
 * Gulp는 node.js로 작성된 task를 단순히 수행하는 task runner이다. (일종의 자동화 매크로)
 *
 * 보통 gulp로 하는 작업들
 * 1. WebPack Bundling
 * 2. dist 폴더 삭제 (webpakc에서는 dist폴더를 비우는 plugin이 존재한다)
 * 2. dist 폴더에 복사
 * 3. live reload
 */

/*
    dist 폴더 내부 삭제
 */
gulp.task('clean:dist', () => {
    return del([
        './dist/**/*'
    ]);
});

gulp.task('webpack:build:dev', ['clean:dist'], () => {
    /**
     * watch 형태로 파일 변경시 자동 빌드
     * cached로 자동 빌드 성능 향상
     * @type {webpackDevConfig}
     */
    const config = Object.create(webpackDevConfig);
    const compiler= webpack(config);

    compiler.run((err, stats) => {
        if(err || stats.hasErrors()) {
            log.error(err);
        }
    });
});

gulp.task('webpack:build:production', ['clean:dist'], () => {
    const config = Object.create(webpackProdConfig);
    const compiler= webpack(config);

    compiler.run((err, stat) => {
        if(err) {
            log.error(err);
        }
    });
});

gulp.task('webpack:devServer', () => {
    /**
     * watch 형태로 파일 변경시 자동 빌드
     * 자동 빌드시 브라우저 새로고침
     */
    const config = Object.create(webpackDevConfig);
    const options = Object.create(webpackDevServerConfig.devServer);

    const compiler = webpack(config);
    const server = new WebpackDevServer(compiler, options);

    server.listen(options.port, options.host, (err) => {
        if(err) {
            log.error(err);
        }
    });
});

gulp.task('webpack:devServer:browserSync', () => {
    /**
     * watch 형태로 파일 변경시 자동 빌드
     * 자동 빌드시 브라우저 새로고침
     */
    const config = Object.create(webpackDevServerConfig);
    const options = Object.create(webpackDevServerConfig.devServer);

    const compiler = webpack(config);
    const server = new WebpackDevServer(compiler, options);

    server.listen(options.port, options.host, (err) => {
        if(err) {
            log.error(err);
        }
    });
});

// gulp.watch('js/**/*.js', function(event) {
//     console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });