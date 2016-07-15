var gulp = require('gulp');

gulp.task('build', function () {
    gulp.src('./bower_components/ace-builds/src-noconflict/**/*')
        .pipe(gulp.dest('./example/web/js/ace'));
});
