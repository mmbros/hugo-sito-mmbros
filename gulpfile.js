/*
 * https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js
 * https://gist.github.com/DESIGNfromWITHIN/11383339#file-gulpfile-js
 * http://www.zell-weekeat.com/gulp-tutorial-2/
 * https://gist.github.com/austinpray/494b0b97c5b5e24f35eb
 */

var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var rename = require('gulp-rename');
//var minifycss = require('gulp-minify-css')
var browserSync = require("browser-sync").create();


var paths = {
  sass: {
    watch: ['./scss/**/*.{scss,sass}'],
    src: './scss/**/*.{scss,sass}',
    dest: './themes/mmbase/static'
  },

  html: {
    watch: ['./public/**/*.html'],
    src: './public/**/*.html',
    dest: './public/**/*.html'
  },

};


/**
 * FONTS
 */

gulp.task('fonts-icomoon', function() {
  // copy icomoon fonts to static/fonts folder
  gulp.src('./bower_components/icomoon-bower/fonts/icomoon.*')
    .pipe(gulp.dest('./themes/mmbase/static/fonts'));
  // copy & rename style.css to ./scss/fonts folder
  gulp.src('./bower_components/icomoon-bower/style.css')
    .pipe(rename('_icomoon.scss'))
    .pipe(gulp.dest('./scss/fonts/'));
});


gulp.task('fonts', ['fonts-icomoon']);


/**
 * SASS
 */

gulp.task('sass', function() {
  return gulp.src(paths.sass.src)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(gulp.dest('./public'))

//    .pipe(rename({suffix: '.min'}))
//    .pipe(minifycss())
//    .pipe(gulp.dest(paths.sass.dest))
    .pipe(browserSync.stream({match: '**/*.css'}));
});


/**
 * CLEAN
 */


gulp.task('clean', function() {
  del("./public");
  del("./themes/mmbase/static/*");
});


/**
 * HTML
 */

gulp.task('html', function() {
  return gulp.src(paths.html.src)
    // Perform minification tasks, etc here
//    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream({match: '**/*.html'}));
});


/**
 * SERVE
 */


// Static Server + watching scss/html files
gulp.task('serve', ['fonts', 'sass', 'html'], function() {

    browserSync.init({
      // Serve files from the app directory, with a specific index filename
      server: {
          baseDir: './public',
          index: "index.html"
      },
      port: 3000
    });

    gulp.watch(paths.sass.watch, ['sass']);
//    gulp.watch(paths.html.watch).on('change', browserSync.reload);
    gulp.watch(paths.html.watch, ['html']);
});


gulp.task('default', ['serve']);
