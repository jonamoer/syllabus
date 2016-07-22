/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(gulp => {
    'use strict';

    const CFG = global.CONFIG;

    gulp.task('copy', [
        'copy:info',
        'copy:appcache',
        'copy:data',
        'copy:gemfile',
        'copy:gitignore',
        'copy:images',
        'copy:scripts',
        'copy:styles',
        'copy:templates',
        'copy:text',
    ]);

    gulp.task('copy:info', () => {
        let gutil = require('gulp-util');
        CFG.destinations.forEach(element => {
            gutil.log(gutil.colors.white.bgMagenta(` ${element} `));
        });
    });

    gulp.task('copy:appcache', () => {
        CFG.destinations.forEach(element => {
            gulp.src('./*.appcache')
                .pipe(gulp.dest(`../${element}`));
        });
    });

    gulp.task('copy:data', () => {
        CFG.destinations.forEach(element => {
            gulp.src('./_data/cdn.yml')
                .pipe(gulp.dest(`../${element}/_data`));
        });
    });

    gulp.task('copy:gemfile', () => {
        CFG.destinations.forEach(element => {
            gulp.src('./Gemfile{,.lock}')
                .pipe(gulp.dest(`../${element}`));
        });
    });

    gulp.task('copy:gitignore', () => {
        CFG.destinations.forEach(element => {
            gulp.src('./.gitignore')
                .pipe(gulp.dest(`../${element}`));
        });
    });

    gulp.task('copy:images', () => {
        CFG.destinations.forEach(element => {
            gulp.src('./images/**/*.{gif,ico,jpg,jpeg,png,svg}')
                .pipe(gulp.dest(`../${element}/images`));
        });
    });

    gulp.task('copy:scripts', () => {
        CFG.destinations.forEach(element => {
            gulp.src('./js/main.js')
                .pipe(gulp.dest(`../${element}/js`));
        });
    });

    gulp.task('copy:styles', () => {
        CFG.destinations.forEach(element => {
            let sources = [
                gulp.src('./_sass/**/*'),
                gulp.src('./css/bootstrap.css'),
                gulp.src('./css/main.scss')
            ];
            sources[0].pipe(gulp.dest(`../${element}/_sass`));
            sources[1].pipe(gulp.dest(`../${element}/css`));
            sources[2].pipe(gulp.dest(`../${element}/css`));
        });
    });

    gulp.task('copy:templates', () => {
        CFG.destinations.forEach(element => {
            let sources = [
                gulp.src('./_includes/**/*.{html,md}'),
                gulp.src('./_layouts/**/*.html')
            ];
            sources[0].pipe(gulp.dest(`../${element}/_includes`));
            sources[1].pipe(gulp.dest(`../${element}/_layouts`));
        });
    });

    gulp.task('copy:text', () => {
        CFG.destinations.forEach(element => {
            gulp.src('./*.txt')
                .pipe(gulp.dest(`../${element}`));
        });
    });

})(require('gulp'));