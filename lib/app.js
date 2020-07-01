'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _video = require('./routes/video');

var _video2 = _interopRequireDefault(_video);

var _compose = require('./routes/compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('views', _path2.default.join(__dirname, '../src/views'));
app.set('view engine', 'jade');

app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, '../src/public', 'favicon.ico')));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
// app.use(require('node-sass-middleware')({
//   src:            path.join(__dirname, '../src/public'),
//   dest:           path.join(__dirname, '../src/public'),
//   debug:          true,
//   indentedSyntax: true,
//   sourceMap:      true,
// }));
app.use(_express2.default.static(_path2.default.join(__dirname, '../src/public')));
app.use('/download', _express2.default.static(_path2.default.join(__dirname, '../src/public/media'), {
  setHeaders: function setHeaders(res, path) {
    res.attachment(path);
  }
}));

app.use('/', _index2.default);
app.use('/video', _video2.default);
app.use('/media', _compose2.default);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

module.exports = app;