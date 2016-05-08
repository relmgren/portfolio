var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var sh = require('shelljs');
var browserSync = require('browser-sync').create();


var paths = {
  sass: ['./sass/**/*.scss', './sass/**/*.sass'],
  img: ['./www/img/**/*.png', './www/img/**/*.jpg', './www/img/**/*.svg']
};

gulp.task('default', ['serve']);

gulp.task('sass', function(done) {
  gulp.src('./sass/main.sass')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('compress', function() {
  return gulp.src('./www/js/*.js')
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

gulp.task('serve', ['sass', 'compress'], function () {
  browserSync.init({
    browser: "google chrome",
    index: 'index.html',
    injectChagnes: false,
    server: true
  });

  gulp.watch(paths.sass, ['sass', browserSync.reload]);
  gulp.watch(paths.img).on('change', browserSync.reload);
  gulp.watch('www/js/*.js').on('change', function() {
    runSequence('compress', browserSync.reload)
  });
  gulp.watch('index.html').on('change', browserSync.reload);
});
