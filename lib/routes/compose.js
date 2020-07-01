'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fluentFfmpeg = require('fluent-ffmpeg');

var _fluentFfmpeg2 = _interopRequireDefault(_fluentFfmpeg);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _data = require('../data/data.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// if (process.env.ffmpeg) ffmpeg.setFfmpegPath(process.env.ffmpeg);
var ffmpegPath = '/opt/app/ffmpeg-3.3.4-64bit-static/ffmpeg';
_fluentFfmpeg2.default.setFfmpegPath(ffmpegPath);

// E_1~118001-5233_1~200701-3200_22~82012-8613_24~67207-11187_.mp4
router.get('/:edl', function (req, res) {
  var lang = void 0;
  var segments = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = req.params.edl.split('_')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var segment = _step.value;

      var _segment$split = segment.split(/~|-/),
          _segment$split2 = _slicedToArray(_segment$split, 3),
          id = _segment$split2[0],
          start = _segment$split2[1],
          length = _segment$split2[2];

      if (isNaN(id) && !lang) lang = id;
      if (isNaN(id)) continue;

      segments.push({
        id: id,
        start: parseInt(start, 10),
        length: parseInt(length, 10),
        end: parseInt(start, 10) + parseInt(length, 10)
      });
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

  _async2.default.map(segments, function (segment, callback) {
    // ffmpeg -acodec copy -vcodec copy -ss $start -t $length -i input.m4v part1.ts
    var url = _data.VIDEOS[lang][segment.id].split(',')[1];
    var ff = (0, _fluentFfmpeg2.default)(url);
    ff.seekInput(segment.start / 1000).duration(segment.length / 1000).audioCodec('copy').videoCodec('copy').output('/tmp/' + lang + '_' + segment.id + '~' + segment.start + '-' + segment.length + '.ts');

    ff.on('start', function (commandLine) {
      console.log('Spawned Ffmpeg with command: ' + commandLine);
    });

    ff.on('error', function (err, stdout, stderr) {
      console.log('Cannot process video: ' + err.message);
      callback(err, null);
    });

    ff.on('end', function () {
      console.log('Transcoding succeeded !');
      callback(null, segment);
    });

    ff.run();
  }, function (err, results) {
    // ffmpeg -i "concat:part1.ts|part2.ts|part3.ts" -acodec copy -vcodec copy output.mp4
    console.log(results);
    var ff = (0, _fluentFfmpeg2.default)();
    var input = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = results[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var segment = _step2.value;

        input.push('/tmp/' + lang + '_' + segment.id + '~' + segment.start + '-' + segment.length + '.ts');
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    ff.input('concat:' + input.join('|'));
    ff.output(_path2.default.join(__dirname, '../../src/public/media', '' + req.params.edl));

    ff.on('start', function (commandLine) {
      console.log('Spawned Ffmpeg with command: ' + commandLine);
    });

    ff.on('error', function (err, stdout, stderr) {
      console.log('Cannot process video: ' + err.message);
    });

    ff.on('end', function () {
      console.log('Transcoding succeeded !');

      if (req.query.download) {
        res.redirect('/download/' + req.params.edl + '?done');
      } else {
        res.redirect('/media/' + req.params.edl + '?done');
      }
    });

    ff.run();
  });

  //
});

module.exports = router;