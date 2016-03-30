/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(() => {
    'use strict';

    const CONFIG = require('../config.json');

    let gulp = require('gulp');

    gulp.task('watch', [
        'watch:styles'
    ]);

    gulp.task('watch:styles', () => {
        gulp.watch('./scss/**/*.scss', ['styles']);
    });

})();