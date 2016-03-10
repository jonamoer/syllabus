/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(() => {
    'use strict';

    const CONFIG = require('../config.json');

    let gulp = require('gulp');

    gulp.task('copy:templates', () => {
        let sources = [
            gulp.src('./_includes/**/*.html'),
            gulp.src('./_layouts/**/*.html')
        ];

        CONFIG.destinations.forEach(element => {
            sources[0].pipe(gulp.dest(`../${element}/_includes`));
            sources[1].pipe(gulp.dest(`../${element}/_layouts`));
        });
    });

})();