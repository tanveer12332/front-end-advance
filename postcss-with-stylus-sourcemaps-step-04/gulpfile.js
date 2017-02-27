var gulp=require('gulp');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');


gulp.task('styles', function(){
	var processors = [
		csswring
	];
	return gulp.src('style.css')
	.pipe(postcss(processors))
	.pipe(gulp.dest('./dest'));
});
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
     .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dest/sass'));
});
gulp.task('advstylus', function () {
  return gulp.src('./stylus/**/*.styl')
      .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./dest/stylus'));
});
// External sourcemaps 
gulp.task('sourcemaps-advstylus', function () {
  return gulp.src('./stylus/**/*.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: true
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dest/stylus'));
});
gulp.task('watch:styles', function(){
	gulp.watch('**/*.css', ['styles']);
});
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
gulp.task('stylus:watch', function () {
  gulp.watch('./stylus/**/*.styl', ['advstylus']);
});
