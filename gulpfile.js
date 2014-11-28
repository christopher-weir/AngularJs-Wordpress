var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css')
    ;

// Task: less
gulp.task('less-watch', function () {
  gulp.src('./src/less/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./www/wp-content/themes/AngularJs'));
});


// Task: less
gulp.task('less-build', function () {
  gulp.src('./src/less/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./src/dist/'));
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



// Task: compress js
gulp.task('compress-js', function() {
    gulp.src(
        './src/dist/*.js'
    )
        .pipe(uglify('site.js'))
        .pipe(gulp.dest('./www/wp-content/themes/AngularJs/js'))
});



// Task: compress css
gulp.task('compress-css', function() {
    gulp.src(
        './src/dist/*.css'
    )
        .pipe(minifyCSS({
            keepSpecialComments :   1
        }))
        .pipe(gulp.dest('./www/wp-content/themes/AngularJs/'))
});



/*
    WATCH
*/
gulp.task('watch', function() {

    // Watch the less files
    gulp.watch('./src/less/*.less', ['less-watch']);
    gulp.watch('./src/js/*.js', ['concact-watch']);


});



/*
    BUILD
*/
gulp.task('build', function() {
    runSequence(
        'less-build',
        'concact-build',
        'compress-js',
        'compress-css',
        function() {
            console.log('built ok')
        });

});



gulp.task('default', ['watch']);