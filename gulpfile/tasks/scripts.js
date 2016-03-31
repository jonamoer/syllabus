/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(gulp => {
    'use strict';

    const CONFIG = require('../config.json');

    let concat  = require('gulp-concat'),
        gulp_if = require('gulp-if'),
        uglify  = require('gulp-uglify');

    gulp.task('scripts', [
        'scripts:main'
    ]);

    gulp.task('scripts:main', () => {
        return gulp.src(`${CONFIG.dir.src}js/**/*.js`)
            .pipe(concat('main.js'))
            .pipe(gulp_if(isProduction, uglify(CONFIG.uglify)))
            .pipe(gulp.dest(`./js`));
    });

})(require('gulp'));