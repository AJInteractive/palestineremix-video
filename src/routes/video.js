import express from 'express';
import parse from 'url-parse';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

import { TITLES, VIDEOS } from '../data/data.js';


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

  const aj = url.pathname.split('/')[1];
  const lang = aj.charAt(2).toUpperCase();
  const segments = [];

  for (const segment of url.hash.split('/')) {
    const [id, start, length] = segment.split(/:|,/);
    if (isNaN(id)) continue;

    segments.push({
      id,
      start,
      length,
      title:   TITLES[lang][id],
      startTC: timecode(parseInt(start, 10)),
      endTC:   timecode(parseInt(start, 10) + parseInt(length, 10)),
      text:    getText(id, lang, parseInt(start, 10), parseInt(start, 10) + parseInt(length, 10)),
    });
  }


  res.render('video', {
    title: 'PalestineRemix Video',
    url,
    aj,
    lang,
    segments,
  });
});

module.exports = router;
