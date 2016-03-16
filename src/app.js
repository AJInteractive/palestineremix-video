import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import index from './routes/index';
import video from './routes/video';
import compose from './routes/compose';

const app = express();

app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, '../src/public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src:            path.join(__dirname, '../src/public'),
  dest:           path.join(__dirname, '../src/public'),
  debug:          true,
  indentedSyntax: true,
  sourceMap:      true,
}));
app.use(express.static(path.join(__dirname, '../src/public')));
app.use('/download', express.static(path.join(__dirname, '../src/public'), {
  setHeaders: (res, path) => {
    res.attachment(path);
  },
}));

app.use('/', index);
app.use('/video', video);
app.use('/media', compose);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error:   err,
  });
});


module.exports = app;
