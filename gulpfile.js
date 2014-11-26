var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyHTML = require('gulp-minify-html')
    ;


gulp.task('less', function () {
  gulp.src('./src/less/site.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./www/wp-content/themes/AngularJs/css'));
});

gulp.task('compress', function() {
    gulp.src([
        './src/js/*.js',
        './src/js/modules/*/*.js'
    ])
        .pipe(uglify())
        .pipe(gulp.dest('./src/dist'))
});

gulp.task('compress_build', function() {
    gulp.src([
        './src/js/lib/angular/angular.min.js',
        './src/js/*.js'
    ])
        .pipe(uglify())
        .pipe(gulp.dest('./www/wp-content/themes/AngularJs/js'))
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
        'compress_build',
        function() {
            console.log('built ok')
        });

});



gulp.task('default', ['watch']);