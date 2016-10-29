/**
 * @author    Olivier Parent
 * @copyright Copyright © 2015-2016 Artevelde University College Ghent
 * @license   Apache License, Version 2.0
 */
(gulp => {
    'use strict';

    const CFG = global.CONFIG;

    let fs = require('fs');

    gulp.task('copy', [
        'copy:404',
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

    gulp.task('copy:404', () => {
        CFG.destinations.forEach(destination => {
            fs.stat(`../${destination}`, (error) => {
                if (!error) {
                    gulp.src('./404.md')
                        .pipe(gulp.dest(`../${destination}`));
                }
            });
        });
    });

    gulp.task('copy:info', () => {
        let gutil = require('gulp-util');
        CFG.destinations.forEach(destination => {
            fs.stat(`../${destination}`, (error) => {
                if (error) {
                    gutil.log(gutil.colors.white.bgRed(` ${destination} `));
                } else {
                    gutil.log(gutil.colors.white.bgGreen(` ${destination} `));
                }
            });
        });
    });

    gulp.task('copy:appcache', () => {
        CFG.destinations.forEach(destination => {
            fs.stat(`../${destination}`, (error) => {
                if (!error) {
                    gulp.src('./*.appcache')
                        .pipe(gulp.dest(`../${destination}`));
                }
            });
        });
    });

    gulp.task('copy:data', () => {
        CFG.destinations.forEach(destination => {
            fs.stat(`../${destination}`, (error) => {
                if (!error) {
                    gulp.src('./_data/cdn.yml')
                        .pipe(gulp.dest(`../${destination}/_data`));
                }
            });
        });
    });

    gulp.task('copy:gemfile', () => {
        CFG.destinations.forEach(destination => {
            fs.stat(`../${destination}`, (error) => {
                if (!error) {
                    gulp.src('./Gemfile{,.lock}')
                        .pipe(gulp.dest(`../${destination}`));
                }
            });
        });
    });

    gulp.task('copy:gitignore', () => {
        CFG.destinations.forEach(destination => {
            fs.stat(`../${destination}`, (error) => {
                if (!error) {
                    gulp.src('./.gitignore')
                        .pipe(gulp.dest(`../${destination}`));
                }
            });
        });
    });

    gulp.task('copy:images', () => {
        CFG.destinations.forEach(destination => {
            fs.stat(`../${destination}`, (error) => {
                if (!error) {
                    gulp.src('./images/**/*.{gif,ico,jpg,jpeg,png,svg}')
                        .pipe(gulp.dest(`../${destination}/images`));
                }
            });
        });
    });

    gulp.task('copy:scripts', () => {
        CFG.destinations.forEach(destination => {
            fs.stat(`../${destination}`, (error) => {
                if (!error) {
                    gulp.src('./js/main.js')
                        .pipe(gulp.dest(`../${destination}/js`));
                }
            });
        });
    });

    gulp.task('copy:styles', () => {
        CFG.destinations.forEach(destination => {
            fs.stat(`../${destination}`, (error) => {
                if (!error) {
                    let sources = [
                        gulp.src('./_sass/**/*'),
                        gulp.src('./css/bootstrap.css'),
                        gulp.src('./css/main.scss')
                    ];
                    sources[0].pipe(gulp.dest(`../${destination}/_sass`));
                    sources[1].pipe(gulp.dest(`../${destination}/css`));
                    sources[2].pipe(gulp.dest(`../${destination}/css`));
                }
            });
        });
    });

    gulp.task('copy:templates', () => {
        CFG.destinations.forEach(destination => {
            fs.stat(`../${destination}`, (error) => {
                if (!error) {
                    let sources = [
                        gulp.src('./_includes/**/*.{html,md}'),
                        gulp.src('./_layouts/**/*.html')
                    ];
                    sources[0].pipe(gulp.dest(`../${destination}/_includes`));
                    sources[1].pipe(gulp.dest(`../${destination}/_layouts`));
                }
            });
        });
    });

    gulp.task('copy:text', () => {
        CFG.destinations.forEach(destination => {
            fs.stat(`../${destination}`, (error) => {
                if (!error) {
                    gulp.src('./*.txt')
                        .pipe(gulp.dest(`../${destination}`));
                }
            });
        });
    });

})(require('gulp'));