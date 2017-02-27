var gulp=require('gulp');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var watch = require('gulp-watch');
var cssnext = require('cssnext');
var precss = require('precss');
var lost = require('lost');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var imageop = require('gulp-image-optimization');

gulp.task('imagemin', function() {
   var img_src = 'src/**/*.+(png|jpg|gif)',
   imgDst = 'dest/src';

   gulp.src(img_src)
   .pipe(changed(imgDst))
   .pipe(imagemin())
   .pipe(gulp.dest(imgDst));
});
gulp.task('images', function(cb) {
    gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('dest/src')).on('end', cb).on('error', cb);
});

gulp.task('watch', function(){
gulp.watch('src/**/*', ['imagemin']);
});

gulp.task('default',['watch']);
