var gulp = require('gulp')

var browserify = require('browserify');
var babelify= require('babelify');
var util = require('gulp-util');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('babel', function() {
    browserify('./js/App.js', { debug: true })
    	.add(require.resolve('babel/polyfill'))
    	.transform(babelify)
    	.bundle()
    	.on('error', util.log.bind(util, 'Browserify Error'))
    	.pipe(source('bundle.js'))
    	.pipe(buffer())
    	.pipe(sourcemaps.init({loadMaps: true}))
    	.pipe(uglify({ mangle: false }))
    	.pipe(sourcemaps.write('./'))
    	.pipe(gulp.dest('./js/dist'));
});


gulp.task('babel-prod', function() {
    browserify('./js/App.js', { debug: true })
    	.add(require.resolve('babel/polyfill'))
    	.transform(babelify)
    	.bundle()
    	.on('error', util.log.bind(util, 'Browserify Error'))
    	.pipe(source('bundle.js'))
    	.pipe(buffer())
    	.pipe(uglify({ mangle: false }))
    	.pipe(sourcemaps.write('./'))
    	.pipe(gulp.dest('./js/dist'));
});