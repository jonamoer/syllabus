/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(() => {
    'use strict';

    let gulp         = require('gulp'),
        webstandards = require('gulp-webstandards');

    gulp.task('check', [
        'check:webstandards'
    ]);

    gulp.task('check:webstandards', _ => {
        return gulp.src([
                './css/**/*',
                './gulp/**/*',
                './js/**/*'
            ])
            .pipe(webstandards());
    });

})();