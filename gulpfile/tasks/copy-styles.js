/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(() => {
    'use strict';

    let gulp   = require('gulp'),
        CONFIG = require('../config.json');

    gulp.task('copy:styles', () => {
        let sources = [
            gulp.src('./_sass/**/*'),
            gulp.src('./css/bootstrap.css'),
            gulp.src('./css/main.scss')
        ];

        CONFIG.destinations.forEach(element => {
            sources[0].pipe(gulp.dest(`../${element}/_sass`));
            sources[1].pipe(gulp.dest(`../${element}/css`));
        });
    });

})();