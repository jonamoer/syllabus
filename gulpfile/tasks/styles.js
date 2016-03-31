/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(gulp => {
    'use strict';

    const CONFIG = require('../config.json');

    let gulp_if = require('gulp-if'),
        sass    = require('gulp-sass');

    gulp.task('styles', [
        'styles:bootstrap'
    ]);

    gulp.task('styles:bootstrap', () => {
        return gulp.src(`${CONFIG.dir.src}css/bootstrap.scss`)
            .pipe(sass(gulp_if(isProduction, CONFIG.sass.production, CONFIG.sass.development)).on('error', sass.logError))
            .pipe(gulp.dest('./css'));
    });

})(require('gulp'));