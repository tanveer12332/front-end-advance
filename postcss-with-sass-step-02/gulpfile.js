var gulp=require('gulp');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var sass = require('gulp-sass');


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
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dest/sass'));
});
gulp.task('watch:styles', function(){
	gulp.watch('**/*.css', ['styles']);
});
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
