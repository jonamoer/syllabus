/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(gulp => {
    'use strict';

    gulp.task('update', [
        'update:bundler'
    ]);

    gulp.task('update:bundler', _ => {
        const spawn  = require('child_process').spawn;
        const update = spawn('bundler', ['update']);

        update.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
    });

})(require('gulp'));