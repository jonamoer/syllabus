/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(() => {
    'use strict';

    const CONFIG = require('../config.json');

    let gulp   = require('gulp'),
        concat = require('gulp-concat'),
        uglify = require('gulp-uglify');

    gulp.task('scripts', [
        'scripts:main'
    ]);

    gulp.task('scripts:main', () => {
        return gulp.src(`${CONFIG.dir.src}js/**/*.js`)
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(gulp.dest(`./js`));
    });

})();