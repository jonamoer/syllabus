/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(() => {
    'use strict';

    const CONFIG = require('../config.json');

    let gulp = require('gulp'),
        sass = require('gulp-sass');

    gulp.task('sass', () => {
        return gulp.src('./scss/**/*.scss')
            .pipe(sass(CONFIG.sass).on('error', sass.logError))
            .pipe(gulp.dest('./css'));
    });

    gulp.task('sass:watch', () => {
        gulp.watch('./scss/**/*.scss', ['sass']);
    });

})();