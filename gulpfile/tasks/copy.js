/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(gulp => {
    'use strict';

    const CFG = global.CONFIG;

    gulp.task('copy', [
        'copy:gemfile',
        'copy:gitignore',
        'copy:images',
        'copy:scripts',
        'copy:styles',
        'copy:templates'
    ]);

    gulp.task('copy:gemfile', () => {
        let source = gulp.src('./Gemfile');

        CFG.destinations.forEach(element => {
            source.pipe(gulp.dest(`../${element}`));
        });
    });

    gulp.task('copy:gitignore', () => {
        let source = gulp.src('./.gitignore');

        CFG.destinations.forEach(element => {
            source.pipe(gulp.dest(`../${element}`));
        });
    });

    gulp.task('copy:images', () => {
        let source = gulp.src('./images/**/*');

        CFG.destinations.forEach(element => {
            source.pipe(gulp.dest(`../${element}/images`));
        });
    });

    gulp.task('copy:scripts', () => {
        let source = gulp.src('./js/main.js');

        CFG.destinations.forEach(element => {
            source.pipe(gulp.dest(`../${element}/js`));
        });
    });

    gulp.task('copy:styles', () => {
        let sources = [
            gulp.src('./_sass/**/*'),
            gulp.src('./css/bootstrap.css'),
            gulp.src('./css/main.scss')
        ];

        CFG.destinations.forEach(element => {
            sources[0].pipe(gulp.dest(`../${element}/_sass`));
            sources[1].pipe(gulp.dest(`../${element}/css`));
        });
    });

    gulp.task('copy:templates', () => {
        let sources = [
            gulp.src('./_includes/**/*.html'),
            gulp.src('./_layouts/**/*.html')
        ];

        CFG.destinations.forEach(element => {
            sources[0].pipe(gulp.dest(`../${element}/_includes`));
            sources[1].pipe(gulp.dest(`../${element}/_layouts`));
        });
    });


})(require('gulp'));