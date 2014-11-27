var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyHTML = require('gulp-minify-html')
    ;

// Task: less
gulp.task('less', function () {
  gulp.src('./src/less/site.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./www/wp-content/themes/AngularJs/css'));
});



// Task: concact
gulp.task('concact-watch', function() {
    gulp.src([
        './src/js/lib/angular/angular.min.js',
        './src/js/config.js',
        './src/js/app.js',
        './src/js/modules/*/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./www/wp-content/themes/AngularJs/js'))
});


gulp.task('concact-build', function() {
    gulp.src([
        './src/js/lib/angular/angular.min.js',
        './src/js/config.js',
        './src/js/app.js',
        './src/js/modules/*/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./src/dist/'))
});



// Task: compress
gulp.task('compress', function() {
    gulp.src(
        './src/dist/*.js'
    )
        .pipe(uglify('site.js'))
        .pipe(gulp.dest('./www/wp-content/themes/AngularJs/js'))
});



/*
    WATCH
*/
gulp.task('watch', function() {

    // Watch the less files
    gulp.watch('./src/less/*.less', ['less']);
    gulp.watch('./src/js/*.js', ['concact-watch']);


});



/*
    BUILD
*/
gulp.task('build', function() {
    runSequence(
        'less',
        'concact-build',
        'compress',
        function() {
            console.log('built ok')
        });

});



gulp.task('default', ['watch']);