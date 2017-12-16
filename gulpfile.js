var gulp = require('gulp');

/**
 * Gulp는 node.js로 작성된 task들을 단순히 수행하는 task runner이다. (일종의 자동화 매크로)
 *
 * 보통 gulp로 하는 작업들
 * 1. WebPack Bundling
 * 2. dist 폴더 삭제 (webpakc에서는 dist폴더를 비우는 plugin이 존재한다)
 * 2. dist 폴더에 복사
 * 3. live reload
 */

gulp.task('webpack:build', () => {
  return gulp.src('./src/**/*.js')
    .pipe(gulp.dest('./dist/'))
    .pipe(gulp.dest('./www/'));
});

gulp.task('webpack:devServer', () => {
    return;
});

gulp.watch('js/**/*.js', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});