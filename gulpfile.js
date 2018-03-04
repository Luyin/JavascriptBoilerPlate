const gulp = require('gulp');
const path = require('path');
const del = require('del');
const log = require('fancy-log');
const sassdoc = require('sassdoc');
const karmaServer = require('karma').Server;
const webpack = require ('webpack');
const webpackDevConfig = require('./config/webpack/webpack.dev');
const webpackBrowserSyncConfig = require('./config/webpack/webpack.browserSync');
const webpackProdConfig = require('./config/webpack/webpack.prod');

/**
 * Gulp는 node.js로 작성된 task를 단순히 수행하는 task runner이다. (일종의 자동화 매크로)
 *
 * 보통 gulp로 하는 작업들
 * 1. Live Reloading
 * 2. Karma 설정
 */

/*
    dist 폴더 내부 삭제
 */
gulp.task('clean:dist', () => {
    return del([
        './dist/**/*'
    ]);
});
/*
    docs 폴더 내부 삭제
 */
gulp.task('clean:docs', () => {
    return del([
        './docs/**/*'
    ]);
});

gulp.task('webpack:build:dev', ['clean:dist'], () => {
    /**
     * watch 형태로 파일 변경시 자동 빌드
     * cached로 자동 빌드 성능 향상
     * @type {webpackDevConfig}
     */
    const compiler= webpack(webpackDevConfig);

    compiler.watch({
        },(err, stats) => {
            if(err || stats.hasErrors()) {
                log.error(err);
        }
    });
});

gulp.task('webpack:build:production', ['clean:dist'], () => {
    const compiler= webpack(webpackProdConfig);

    compiler.run((err, stat) => {
        if(err) {
            log.error(err);
        }
    });
});

gulp.task('webpack:browserSync', () => {
    const compiler = webpack(webpackBrowserSyncConfig);

    compiler.watch({
      },(err, stats) => {
      if(err || stats.hasErrors()) {
        log.error(err);
      }
    });
});

gulp.task('sassdoc', ['clean:docs'], () => {
    var options = {
        dest: 'docs/sassdoc',
        verbose: true,
        display: {
            access: ['public', 'private'],
            alias: true,
            watermark: true,
        },
        groups: {
            'undefined': 'Ungrouped',
            foo: 'Foo group',
            bar: 'Bar group',
        },
        basePath: 'https://github.com/SassDoc/sassdoc',
    };

    return gulp.src('./src/assets/**/*.scss')
        .pipe(sassdoc(options));
});

gulp.task('karma:test', function (done) {
    new karmaServer({
        configFile: path.resolve('./karma.config'),
        singleRun: true
    }, function(err){
        if(err === 0){
            done();
        } else {
            log.error('karma', {
                message: 'Karma Tests failed'
            });
            done();
        }
    }).start();
});

// gulp.watch('js/**/*.js', function(event) {
//     console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });