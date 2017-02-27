var gulp=require('gulp');
var watch = require('gulp-watch');

var icon={
allicon :'assets/**/*',
ttf:'assets/**/*.ttf',
eot:'assets/**/*.eot',
woff:'assets/**/*.woff',
svg:'assets/**/*.svg',
otf:'assets/**/*.otf',
wff2:'assets/**/*.woff2'
};
gulp.task('copyfont', function () {
      return gulp.src([icon.allicon,icon.ttf,icon.eot,icon.woff,icon.otf,icon.wff2,icon.svg])
	 .pipe(gulp.dest('dest/assets'));
});
gulp.task('default',['copyfont']);
