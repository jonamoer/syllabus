/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(fs => {
    'use strict';

    global.isProduction = (process.argv.slice(2).indexOf('--production') >= 0);

    fs.readdirSync('./gulpfile/tasks')
        .filter(filename => {
            return filename.match(/\.js$/i);
        })
        .map(filename => {
            require(`./gulpfile/tasks/${filename}`);
        });

})(require('fs'));