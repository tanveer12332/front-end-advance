var gulp=require('gulp');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var watch = require('gulp-watch');
var cssnext = require('cssnext');
var precss = require('precss');
var lost = require('lost');
//postcsss processors setting
 var processors = [
    //precss({}),
	//	csswring,
    lost,
  //  autoprefixer,
    //cssnext({})
	];
gulp.task('styles', function(){
	return gulp.src('style.css')
  .pipe(postcss(processors))
	.pipe(gulp.dest('./dest'));
});

gulp.task('watch', function(){
gulp.watch('**/*.css', ['styles']);
});

gulp.task('default',['watch']);
