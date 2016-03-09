/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(() => {
    'use strict';

    let gulp   = require('gulp'),
        CONFIG = require('../config.json');

    gulp.task('copy:gemfile', () => {
        let source = gulp.src('./Gemfile');

        CONFIG.destinations.forEach(element => {
            source.pipe(gulp.dest(`../${element}`));
        });
    });

})();