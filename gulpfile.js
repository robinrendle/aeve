var gulp = require('gulp'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss')
    rename = require('gulp-rename'),
    eslint = require('gulp-eslint');

gulp.task('compass', function(){
    return gulp.src('static/sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'build/css',
            sass: 'static/sass'
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('build/css'));
});

gulp.task('lint', function(){
    return gulp.src(['static/js/*.js'])
        .pipe(eslint({
            globals: {
                'window':true,
                'document': true
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('watch', function(){
    gulp.watch('static/sass/**/*.scss', ['compass']);
    gulp.watch('static/sass/*.scss', ['compass']);
    gulp.watch('static/js/app.js',['lint']);
});

gulp.task('default', ['compass', 'watch']);
