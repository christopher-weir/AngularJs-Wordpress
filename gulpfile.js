var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyHTML = require('gulp-minify-html'),
    webserver = require('gulp-webserver')
    ;


gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});


gulp.task('less', function () {
  gulp.src('./src/less/site.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('compress', function() {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
});


/*
    WATCH
*/
gulp.task('watch', function() {

    // Watch the less files
    gulp.watch('./src/less/*.less', ['less']);
    gulp.watch('./src/js/*.js', ['compress']);


});



/*
    BUILD
*/
gulp.task('build', function() {
    runSequence(
        'less',
        function() {
            console.log('built ok')
        });

});



gulp.task('default', ['watch', 'webserver']);