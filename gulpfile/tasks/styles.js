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

    gulp.task('styles', [
        'styles:bootstrap'
    ]);

    gulp.task('styles:bootstrap', () => {
        return gulp.src(`${CONFIG.dir.src}css/bootstrap.scss`)
            .pipe(sass(CONFIG.sass).on('error', sass.logError))
            .pipe(gulp.dest('./css'));
    });

})();