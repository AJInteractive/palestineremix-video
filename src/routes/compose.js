import express from 'express';
import fs from 'fs';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import ffstatic from 'ffmpeg-static';
import async from 'async';

import { VIDEOS } from '../data/data.js';

const router = express.Router();
// ffmpeg.setFfmpegPath(ffstatic.path);

// E_1~118001-5233_1~200701-3200_22~82012-8613_24~67207-11187_.mp4
router.get('/:edl', (req, res) => {
  let lang;
  const segments = [];

  for (const segment of req.params.edl.split('_')) {
    const [id, start, length] = segment.split(/~|-/);
    if (isNaN(id) && !lang) lang = id;
    if (isNaN(id)) continue;

    segments.push({
      id,
      start:  parseInt(start, 10),
      length: parseInt(length, 10),
      end:    parseInt(start, 10) + parseInt(length, 10),
    });
  }

  async.map(segments, (segment, callback) => {
    // ffmpeg -acodec copy -vcodec copy -ss $start -t $length -i input.m4v part1.ts
    const url = VIDEOS[lang][segment.id].split(',')[1];
    const ff = ffmpeg(url);
    ff.seekInput(segment.start / 1000).duration(segment.length / 1000)
      .audioCodec('copy').videoCodec('copy')
      .output(`/tmp/${lang}_${segment.id}~${segment.start}-${segment.length}.ts`);

    ff.on('start', (commandLine) => {
      console.log('Spawned Ffmpeg with command: ' + commandLine);
    });

    ff.on('error', (err, stdout, stderr) => {
      console.log('Cannot process video: ' + err.message);
      callback(err, null);
    });

    ff.on('end', () => {
      console.log('Transcoding succeeded !');
      callback(null, segment);
    });

    ff.run();
  }, (err, results) => {
    // ffmpeg -i "concat:part1.ts|part2.ts|part3.ts" -acodec copy -vcodec copy output.mp4
    console.log(results);
    const ff = ffmpeg();
    let input = [];
    for (const segment of results) {
      // ff.input(`/tmp/${lang}_${segment.id}~${segment.start}-${segment.length}.mp4`);
      input.push(`/tmp/${lang}_${segment.id}~${segment.start}-${segment.length}.ts`);
    }

    ff.input(`concat:${input.join('|')}`);

    // ff.audioCodec('copy').videoCodec('copy')
      // .mergeToFile(`/tmp/${req.params.edl}.mp4`)
    ff.output(path.join(__dirname, `../../src/public/media`, `${req.params.edl}`));

    ff.on('start', (commandLine) => {
      console.log('Spawned Ffmpeg with command: ' + commandLine);
    });

    ff.on('error', (err, stdout, stderr) => {
      console.log('Cannot process video: ' + err.message);
      // callback(err, null);
    });

    ff.on('end', () => {
      console.log('Transcoding succeeded !');
      // callback(null, segment);
      res.redirect(`/media/${req.params.edl}?done`);
    });

    ff.run();
  });


  //
});

module.exports = router;
