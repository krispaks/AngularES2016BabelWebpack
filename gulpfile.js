const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack');
const path = require('path');

gulp.task('webpack', ['clean'], (cb) => {
    const config = require('./webpack.dist.config');
    //config.entry.app = ['babel-polyfill', path.join(__dirname, './', 'app/app.js')];
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