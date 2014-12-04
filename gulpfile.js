var gulp            = require('gulp'),
    less            = require('gulp-less'),
    path            = require('path'),
    runSequence     = require('run-sequence'),
    uglify          = require('gulp-uglify'),
    concat          = require('gulp-concat'),
    minifyCSS       = require('gulp-minify-css'),
    replace         = require('gulp-replace'),
    rename          = require('gulp-rename'),
    htmlclean       = require('gulp-htmlclean'),
    minifyHtml      = require('gulp-minify-html'),
    ngHtml2Js       = require('gulp-ng-html2js'),
    imagemin        = require('gulp-imagemin')
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
        './src/js/angular-modules/**/**/*.js',
        './src/dist/templates.js'
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
        './src/js/angular-modules/**/**/*.js',
        './src/dist/templates.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./src/dist/'))
});



// Task: minify php
gulp.task('move-php', function() {

    gulp.src('./src/php-functions/functions.php')
        .pipe(rename('functions.php'))
        .pipe(gulp.dest('./www/wp-content/themes/AngularJs'));
});



// Task: minify php
gulp.task('minify-php', function() {

    gulp.src('./src/php-templates/*.php')
        .pipe(htmlclean())
        .pipe(gulp.dest('./www/wp-content/themes/AngularJs/'));

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



// Task: concact
gulp.task('compress-images', function() {

    gulp.src('./src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./www/wp-content/themes/AngularJs/assets/images'));
});

gulp.task('compress-images-02', function() {

    gulp.src('./src/assets/screenshot/screenshot.png')
        .pipe(imagemin())
        .pipe(gulp.dest('./www/wp-content/themes/AngularJs/'));
});


// Task: compress css
gulp.task('minify-html', function() {

    gulp.src('./src/js/angular-modules/**/views/*.html')
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: 'core',
            declareModule: false,
        }))
        .pipe(concat('templates.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/dist'));

});



/*
    WATCH
*/
gulp.task('watch', function() {

    // Watch the less files
    gulp.watch('./src/less/*.less', ['less-watch']);
    gulp.watch('./src/less/**/*.less', ['less-watch']);

    gulp.watch('./src/js/*.js', ['concact-watch']);

    gulp.watch('./src/js/angular-modules/*.js', ['minify-html', 'concact-watch']);
    gulp.watch('./src/js/angular-modules/**/*.js', ['minify-html', 'concact-watch']);
    gulp.watch('./src/js/angular-modules/**/views/*.html', ['minify-html', 'concact-watch']);

    gulp.watch('./src/php-templates/*.php', ['minify-php']);
    gulp.watch('./src/php-functions/*.php', ['move-php']);

});



/*
    BUILD
*/
gulp.task('build', function() {
    runSequence(
        'less-build',
        'minify-html',
        'concact-build',
        'compress-js',
        'compress-css',
        'minify-php',
        'move-files',
        'move-php',
        'compress-images',
        'compress-images-02',
        function() {
            console.log('built ok')
        });

});



gulp.task('default', ['watch']);