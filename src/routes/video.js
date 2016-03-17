import express from 'express';
import parse from 'url-parse';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import Bitly from 'bitly';

import { TITLES, VIDEOS } from '../data/data.js';

const bitly = new Bitly('7841e0830831228bd9d758134437a0d8e24a75e4');

const router = express.Router();

const timecode = (time) => {
  const tc = [];

  for (const m of [1000 * 60 * 60, 1000 * 60, 1000]) {
    let n = parseInt(time / m, 10);
    if (isNaN(n)) n = 0;
    time = time - n*m; // eslint-disable-line
    tc.push((`00${n}`).slice(-2));
  }

  return tc.join(':');
};

const getText = (id, lang, start, end) => {
  const html = fs.readFileSync(path.join(__dirname, `../../src/data/transcripts/html/${lang}`, `${id}.html`), 'utf8');
  const $ = cheerio.load(html);

  const text = [];
  let lastPara;

  $('a').map((i, el) => {
    const t = $(el).data('m');
    if (t >= start && t < end) {
      // text.push($(el).text());
      const para = $(el).parent().text();
      if (lastPara !== para) {
        text.push(`<br>${para}`);
        lastPara = para;
      }
    }
  });

  return text.join(' ');
};

router.get('/', (req, res) => {
  const url = parse(req.query.remix);

  if (url.hostname.toLowerCase().indexOf('bit.ly') > -1) {
    bitly.expand(req.query.remix).then((response) => {
      // console.log(response);
      // return res.send(response);
      return res.redirect(`?remix=${encodeURIComponent(response.long_url)}`);
    }, (error) => {
      console.log(error);
      return res.send(error);
    });
  } else {
    const aj = url.pathname.split('/')[1];
    const lang = aj.charAt(2).toUpperCase();
    const segments = [];
    const videoSegments = [lang];

    for (const segment of url.hash.split('/')) {
      let [id, start, length] = segment.split(/:|,/);
      if (isNaN(id)) continue;
      if (isNaN(start)) continue;
      if (isNaN(length)) length = 1e4;

      segments.push({
        id,
        start,
        length,
        title:   TITLES[lang][id],
        startTC: timecode(parseInt(start, 10)),
        endTC:   timecode(parseInt(start, 10) + parseInt(length, 10)),
        text:    getText(id, lang, parseInt(start, 10), parseInt(start, 10) + parseInt(length, 10)),
      });

      videoSegments.push(`${id}~${parseInt(start, 10)}-${parseInt(length, 10)}`);
    }

    videoSegments.push('.mp4');

    res.render('video', {
      title: 'PalestineRemix Video',
      url,
      aj,
      lang,
      segments,
      video: videoSegments.join('_'),
    });
  }
});

module.exports = router;
