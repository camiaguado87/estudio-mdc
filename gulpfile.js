var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var notify = require("gulp-notify");

gulp.task('less', function () {
    gulp.src('./app/less/style.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/css'))
        .pipe(notify('Success!!'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen(4100);
    gulp.watch('./app/less/*.less', ['less']);
});
