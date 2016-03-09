/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(() => {
    'use strict';

    let fs = require('fs');

    fs.readdirSync('./gulpfile/tasks')
        .filter(filename => {
            return filename.match(/\.js$/i);
        })
        .map(filename => {
            require(`./gulpfile/tasks/${filename}`);
        });

})();