'use strict';

require('app-module-path').addPath(__dirname);

const compression = require('compression'),
      express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser'),
      path        = require('path'),
      sass        = require('node-sass'),
      bourbon     = require("bourbon").includePaths,
      neat        = require("bourbon-neat").includePaths,
      fs          = require("fs"),
      log         = require('config/utils/logger.js').log;

app.use(compression());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb' }));

app.use(express.static(__dirname + '/public'));

sass.render({
    file: 'client/styles/main.scss',
    includePaths: [bourbon, neat],
    outputStyle: 'nested',
    outFile: 'public/stylesheet/main.css',
    sourceMap: true
}, function(err, result) {
    if (err) {
        log.warn(err)
    } else {
        fs.writeFile('public/stylesheet/main.css', result.css, function(err) {
            if (!err) {
                log.info('main.css is alive');
            }
        });
    }
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public', 'index.html'));
});

app.listen(4008, function() {
    log.info('Server has been started on port');
});
