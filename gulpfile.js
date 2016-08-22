const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack');
const path = require('path');
const watch = require('gulp-watch');

gulp.task('webpack', ['clean'], (cb) => {
    const config = require('./webpack.dist.config');
    config.entry.app = ['babel-polyfill', './app/app.js'];
    webpack(config, () => {
        cb();
    });
});

gulp.task('clean', (cb) => {
    del(['./dist'])
        .then(()=>{
            cb();
        });
});

gulp.task('watch', () => {
    gulp.watch('./app/**/*.js', ['webpack']);
    gulp.watch('./app/*.js', ['webpack']);
});