'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _urlParse = require('url-parse');

var _urlParse2 = _interopRequireDefault(_urlParse);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bitly = require('bitly');

var _bitly2 = _interopRequireDefault(_bitly);

var _data = require('../data/data.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bitly = new _bitly2.default('7841e0830831228bd9d758134437a0d8e24a75e4');

var router = _express2.default.Router();

var timecode = function timecode(time) {
  var tc = [];

  var _arr = [1000 * 60 * 60, 1000 * 60, 1000];
  for (var _i = 0; _i < _arr.length; _i++) {
    var m = _arr[_i];
    var n = parseInt(time / m, 10);
    if (isNaN(n)) n = 0;
    time = time - n * m; // eslint-disable-line
    tc.push(('00' + n).slice(-2));
  }

  return tc.join(':');
};

var getText = function getText(id, lang, start, end) {
  var html = _fs2.default.readFileSync(_path2.default.join(__dirname, '../../src/data/transcripts/html/' + lang, id + '.html'), 'utf8');
  var $ = _cheerio2.default.load(html);

  var text = [];
  var lastPara = void 0;

  $('a').map(function (i, el) {
    var t = $(el).data('m');
    if (t >= start && t < end) {
      // text.push($(el).text());
      var para = $(el).parent().text();
      if (lastPara !== para) {
        text.push('<br>' + para);
        lastPara = para;
      }
    }
  });

  return text.join(' ');
};

router.get('/', function (req, res) {
  var url = (0, _urlParse2.default)(req.query.remix);
  var hash = url.hash + '';
  if (hash.indexOf(',') === -1) {
    var _hash$split = hash.split('/'),
        _hash$split2 = _slicedToArray(_hash$split, 4),
        bang = _hash$split2[0],
        id = _hash$split2[1],
        start = _hash$split2[2],
        stop = _hash$split2[3];

    hash = id + ':' + parseInt(start, 10) + ',' + (parseInt(stop, 10) - parseInt(start, 10));
  }

  if (url.hostname.toLowerCase().indexOf('bit.ly') > -1) {
    bitly.expand(req.query.remix).then(function (response) {
      // console.log(response);
      // return res.send(response);
      var download = '';
      if (req.query.download) download = '&download=true';
      return res.redirect('?remix=' + encodeURIComponent(response.data.expand[0].long_url) + download);
    }, function (error) {
      console.log(error);
      return res.send(error);
    });
  } else {
    var aj = url.pathname.split('/')[1];
    var lang = aj.charAt(2).toUpperCase();
    var segments = [];
    var videoSegments = [lang];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = hash.split('/')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var segment = _step.value;

        var _segment$split = segment.split(/:|,/),
            _segment$split2 = _slicedToArray(_segment$split, 3),
            _id = _segment$split2[0],
            _start = _segment$split2[1],
            length = _segment$split2[2];

        if (isNaN(_id)) continue;
        if (isNaN(_start)) continue;
        if (isNaN(length)) length = 1e4;

        segments.push({
          id: _id,
          start: _start,
          length: length,
          title: _data.TITLES[lang][_id],
          startTC: timecode(parseInt(_start, 10)),
          endTC: timecode(parseInt(_start, 10) + parseInt(length, 10)),
          text: getText(_id, lang, parseInt(_start, 10), parseInt(_start, 10) + parseInt(length, 10))
        });

        videoSegments.push(_id + '~' + parseInt(_start, 10) + '-' + parseInt(length, 10));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    videoSegments.push('.mp4');

    if (req.query.download) {
      res.redirect('/media/' + videoSegments.join('_') + '?download=true');
    } else {
      res.render('video', {
        title: 'PalestineRemix Video',
        url: url,
        aj: aj,
        lang: lang,
        segments: segments,
        video: videoSegments.join('_')
      });
    }
  }
});

module.exports = router;