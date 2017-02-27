var gulp=require('gulp');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer');
var autoprefixer_stylus = require('autoprefixer-stylus');
var watch = require('gulp-watch');
var cssnext = require('cssnext');
var precss = require('precss');
var lost = require('lost');
var browserSync = require('browser-sync').create();

//set your html css sass etc path
var paths = {
  html: "index.html"
    };
//postcsss processors setting
 var processors = [
    precss({}),
		csswring,
    lost,
    autoprefixer,
    cssnext({})
	];
  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'dest'
      },
    })
  })
  gulp.task('html',function(){
    return gulp.src(paths.html)
    .pipe(gulp.dest('./dest'))
    .pipe(browserSync.reload({
        stream: true
      }));
  });
gulp.task('styles', function(){
	return gulp.src('style.css')
  .pipe(postcss(processors))
  .pipe(gulp.dest('./dest'))
  .pipe(browserSync.reload({
      stream: true
    }));

});
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
  .pipe(postcss(processors))
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dest/sass'))
  .pipe(browserSync.reload({
      stream: true
    }));

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

gulp.task('watch',['browserSync','html'],function(){
gulp.watch('**/*.css', ['styles']);
gulp.watch('./sass/**/*.scss', ['sass']);
gulp.watch('./stylus/**/*.styl', ['advstylus']);
gulp.watch('index.html', ['html'],browserSync.reload);
});

gulp.task('default',['watch']);
