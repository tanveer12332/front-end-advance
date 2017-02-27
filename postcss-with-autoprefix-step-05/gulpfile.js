var gulp=require('gulp');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer');
var autoprefixer_stylus = require('autoprefixer-stylus');
var watch = require('gulp-watch');
//postcsss processors setting
 var processors = [
		csswring,
    autoprefixer
	];
gulp.task('styles', function(){
	return gulp.src('style.css')
	.pipe(postcss(processors))
	.pipe(gulp.dest('./dest'));
});
gulp.task('sass', function () {
 
  return gulp.src('./sass/**/*.scss')
  .pipe(postcss(processors))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
     .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dest/sass'));
});
gulp.task('advstylus', function () {
  return gulp.src('./stylus/**/*.styl')
  //.pipe(postcss(processors))
      .pipe(stylus({
      compress: true,
      use: [autoprefixer_stylus({ browsers: ['ie 7', 'ie 8'] })]
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


gulp.task('stylus:watch', function () {
  gulp.watch('./stylus/**/*.styl', ['advstylus']);
});
gulp.task('watch', function(){
gulp.watch('**/*.css', ['styles']);	
gulp.watch('./sass/**/*.scss', ['sass']);	
gulp.watch('./stylus/**/*.styl', ['advstylus']);	
});

gulp.task('default',['watch']);