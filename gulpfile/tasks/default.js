/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(gulp => {
    'use strict';

    gulp.task('default', [
        'scripts',
        'styles',
        'copy'
    ]);

})(require('gulp'));