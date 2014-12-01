var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
    replace = require('gulp-replace'),
    rename = require('gulp-rename')
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
        './src/bower_components/angular/angular.js',
        './src/bower_components/angular-ui-router/release/angular-ui-router.js',
        './src/js/config.js',
        './src/js/app.js',
        './src/js/angular-modules/**/*.js',
        './src/js/angular-modules/**/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./www/wp-content/themes/AngularJs/js'))
});


gulp.task('concact-build', function() {
    gulp.src([
        './src/bower_components/angular/angular.min.js',
        './src/bower_components/angular-ui-router/release/angular-ui-router.min.js',
        './src/js/config.js',
        './src/js/app.js',
        './src/js/angular-modules/**/*.js',
        './src/js/angular-modules/**/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./src/dist/'))
});



// Task: move map files
gulp.task('move-files', function() {
    gulp.src('./src/bower_components/angular/angular.min.js.map')
        .pipe(rename('angular.min.js.map'))
        .pipe(gulp.dest('./www/wp-content/themes/AngularJs/js'));
});



// Task: compress js
gulp.task('compress-js', function() {
    gulp.src(
        './src/dist/app.js'
    )
        .pipe(uglify('app.js'))
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
        .pipe(replace('/*!', '/*'))
        .pipe(gulp.dest('./www/wp-content/themes/AngularJs/'))
});



/*
    WATCH
*/
gulp.task('watch', function() {

    // Watch the less files
    gulp.watch('./src/less/*.less', ['less-watch']);
    gulp.watch('./src/js/*.js', ['concact-watch']);
    gulp.watch('./src/js/**/*.js', ['concact-watch']);
    gulp.watch('./src/js/**/**/*.js', ['concact-watch']);


});



/*
    BUILD
*/
gulp.task('build', function() {
    runSequence(
        'less-build',
        'concact-build',
        'move-files',
        'compress-js',
        'compress-css',
        function() {
            console.log('built ok')
        });

});



gulp.task('default', ['watch']);