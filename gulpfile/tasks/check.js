/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(gulp => {
    'use strict';

    let webstandards = require('gulp-webstandards');

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

})(require('gulp'));