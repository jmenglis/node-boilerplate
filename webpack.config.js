var webpack = require('webpack'),
    path    = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/scripts');
var APP_DIR   = path.resolve(__dirname, 'client/app');

var config = {
    entry: APP_DIR + '/main.jsx',
    output: {
        path     : BUILD_DIR,
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test    : /\.jsx?/,
                include : APP_DIR,
                loader  : 'babel'
            }
        ]
    }
};

module.exports = config;
