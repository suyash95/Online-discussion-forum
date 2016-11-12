/**
 * Gulpfile
 *
 * @type       minify the files
 * @author     (Shreyansh Nahata <shreyans4nahata@gmailcom>)
 * @date 		02/04/2016
 *
 */

var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');

/*
 gulp.task('lint', function() {
 gulp.src(['./public/javascripts/*.js'])
 .pipe(jshint())
 .pipe(jshint.reporter('default'))
 .pipe(jshint.reporter('fail'));
 });
 */
gulp.task('clean', function() {
    gulp.src('.public/dist/*')
        .pipe(clean({force: true}));
});

gulp.task('minify-css', function() {
    var opts = {comments:true,spare:true};
    gulp.src(['./public/stylesheets/*.css','./public/external/**/*.css','./public/external/**/**/*.css'])
        .pipe(minifyCSS(opts))
        .pipe(gulp.dest('public/dist/'))
});

gulp.task('minify-js', function() {
    gulp.src(['./public/src/*.js','./public/src/**/*.js','./public/src/user/**/*.js','./public/src/user/**/**/*.js','./public/external/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/'))
});
gulp.task('copy-ejs-files', function () {
    gulp.src('./views/*.ejs')
        .pipe(gulp.dest('public/dist/'));
});


/*
 gulp.task('connect', function () {
 connect.server({
 root: 'app/',
 port: 8888
 });
 });

 */
/*gulp.task('default',
 ['lint']
 );
 */
gulp.task('default', function() {
    runSequence(
        ['clean'],
        [/*'lint',*/ 'minify-css', 'minify-js', 'copy-ejs-files']
    );
});