// Karma configuration
// Generated on Mon Jan 18 2016 19:06:38 GMT+0100 (CET)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files,
        // exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'expect', 'sinon'],


        // list of files / patterns to load in the browser
        files: [
            'http://openlayers.org/en/master/css/ol.css',
            'https://cdnjs.cloudflare.com/ajax/libs/extjs/6.0.0/classic/'
                + 'theme-crisp/resources/theme-crisp-all.css',
            'http://openlayers.org/en/master/build/ol.js',
            'http://cdnjs.cloudflare.com/ajax/libs/extjs/6.0.0/ext-all.js',
            'test/loader.js',
            'src/**/*.js',
            'test/spec/GeoExt/**/*.test.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors:
        // https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': ['coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots', 'coverage'],


        // extra config for coverage reporter
        coverageReporter: {
            dir : 'coverage/',
            reporters: [
                { type: 'html', subdir: '.' },
                { type: 'lcovonly', subdir: '.', file: 'lcov.info' }
            ]
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any
        // file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers:
        // https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
