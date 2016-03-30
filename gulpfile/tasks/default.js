/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(() => {
    'use strict';

    let gulp = require('gulp');

    gulp.task('default', [
        'scripts',
        'styles',
        'copy'
    ]);

})();