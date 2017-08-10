var gulp = require('gulp'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    autoprefixer = require('gulp-autoprefixer');

var env,
    sassSources,
    outputDir,
    sassStyle;

env = process.env.NODE_ENV || 'development';

sassSources = ['sass/style.scss'];

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'sass',
      image: 'images',
      style: 'expanded'
    })
    .on('error', gutil.log))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'ff 17', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['compass']);
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task ('default', ['compass', 'connect', 'watch']);
