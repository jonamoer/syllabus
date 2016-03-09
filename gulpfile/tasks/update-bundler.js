/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(() => {
    'use strict';

    let gulp = require('gulp');

    gulp.task('update:bundler', _ => {
        const spawn = require('child_process').spawn;
        const update = spawn('bundler', ['update']);

        update.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });
    });

})();