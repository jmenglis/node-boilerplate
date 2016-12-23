var webpack = require('webpack'),
    path    = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/scripts');
var APP_DIR   = path.resolve(__dirname, 'client/app');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path     : BUILD_DIR,
        filename : 'bundle.js'
    },
    module : {
        loaers : [
            {
                test : /\.jsx?/,

            }
        ]
    }
};

module.exports = config;