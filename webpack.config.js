var webpack = require('webpack'),
    path    = require('path'),
    BUILD_DIR = path.resolve(__dirname, 'public/scripts'),
    APP_DIR   = path.resolve(__dirname, 'client/app');

var config = {
  entry: APP_DIR + '/main.jsx',
  output: {
    path     : BUILD_DIR,
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        test    : /\.jsx?$/,
        include : APP_DIR,
        loader  : 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = config;
