/*
 * https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js
 * https://gist.github.com/DESIGNfromWITHIN/11383339#file-gulpfile-js
 * http://www.zell-weekeat.com/gulp-tutorial-2/
 * https://gist.github.com/austinpray/494b0b97c5b5e24f35eb
 */
'use strict';

var gulp = require('gulp');
var child_process = require('child_process');

var del = require('del');
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
//var rename = require('gulp-rename');
//var minifycss = require('gulp-minify-css')
var browserSync = require("browser-sync").create();

var http_port = 3000;

var paths = {
  sass: {
    watch: ['./scss/**/*.{scss,sass}'],
    src: './scss/**/*.{scss,sass}',
    dest: './static/css'
  },

  html: {
    watch: ['./public/**/*.html'],
    src: './public/**/*.html',
    dest: './public/**/*.html'
  },

  fonts: {
    icomoon: {
      src: './bower_components/icomoon-bower/fonts/*',
      dest: './static/fonts'
    }
  }
};


/**
 * FONTS
 */

gulp.task('fonts-icomoon', function() {
  gulp.src(paths.fonts.icomoon.src)
    .pipe(gulp.dest(paths.fonts.icomoon.dest));
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

    .pipe(gulp.dest('./public/css'))

//    .pipe(rename({suffix: '.min'}))
//    .pipe(minifycss())
//    .pipe(gulp.dest(paths.sass.dest))
    .pipe(browserSync.stream({match: '**/*.css'}));
});


gulp.task('hugo-sass', function() {
  return gulp.src(paths.sass.src)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.sass.dest));

});

gulp.task('hugo', ['hugo-sass'], function() {
  // see: [Running Shell Commands](https://github.com/gulpjs/gulp/blob/4.0/docs/recipes/running-shell-commands.md)
  gulp.watch(paths.sass.watch, ['hugo-sass']);
  child_process.execFile('hugo', ['server','--watch', '--port='+http_port  ]);
  console.log('hugo server --watch --port='+http_port);
});


/**
 * CLEAN
 */


gulp.task('clean', function() {
  del("./public/*");
  del("./themes/*");
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
      port: http_port
    });

    gulp.watch(paths.sass.watch, ['sass']);
//    gulp.watch(paths.html.watch).on('change', browserSync.reload);
    gulp.watch(paths.html.watch, ['html']);
});




gulp.task('default', ['hugo']);
