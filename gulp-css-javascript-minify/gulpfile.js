var gulp=require('gulp'),
 watch = require('gulp-watch'),
 concat = require('gulp-concat'),
 uglify = require('gulp-uglify'),
 minify = require('gulp-minify-css');

gulp.task('js', function(){
   gulp.src('src/**/*.js')
   //.pipe(concat('*.js'))
   .pipe(uglify())
   .pipe(gulp.dest('dest/src'));
});

gulp.task('css', function(){
   gulp.src('src/**/*.css')
   //.pipe(concat('src/css/*.css'))
   .pipe(minify())
   .pipe(gulp.dest('dest/src'));
});

gulp.task('default',['js','css'],function(){
});
