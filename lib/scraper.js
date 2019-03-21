import axios from 'axios';
import rp from 'request-promise';
import cheerio from 'cheerio';
// const $ = require('cheerio');

import { urlParse } from './urlParse';

const lensData = {};
const info = [];

async function getLensData(url) {
  rp(url)
    .then(html => {
      const $ = cheerio;
      // console.log(html);
      // console.log($('.product .image > a', html).length);
      // console.log($('.product .image > a', html));
      const lensTotal = $('.product .image > a', html).length;
      const lensUrls = [];
      for (let i = 0; i < lensTotal; i++) {
        const path = $('.product .image > a', html)[i].attribs.href;
        // console.log(`${path}/specifications`);
        lensUrls.push(`${path}/specifications`);
      }
      // console.log('lensUrls:', lensUrls);
      return Promise.all(lensUrls.map(lensurl => urlParse(lensurl)));
    })
    .then(lenses => {
      console.log(lenses);
    })
    .catch(err => console.log(err));
}

async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

async function getLensNames(html) {
  const lensNames = [];
  // const lensData = {};

  //* load up cheerio
  const $ = cheerio.load(html);

  $('.name').each(function(i, elem) {
    lensNames[i] = $(this)
      .text()
      .trim();
    lensData[i] = {
      lensName: $(this)
        .text()
        .trim(),
    };
  });

  // $('').each(function(i, elem) {
  //   info[i] = $(this)
  //     .text()
  //     .trim();
  //   const text = $(this)
  //     .text()
  //     .trim();
  //   lensData[i].name = '';
  // });

  // console.log(lensNames);
}

async function getLensPrices(html) {
  //* load up cheerio
  const $ = cheerio.load(html);

  //* find prices
  $('.value .prices').each(function(i, elem) {
    info[i] = $(this)
      .text()
      .trim();
    const text = $(this)
      .text()
      .trim();
    lensData[i].price = text;
  });
}

async function getLensAnnounce(html) {
  //* load up cheerio
  const $ = cheerio.load(html);

  $('.announcement .value .strut .value').each(function(i, elem) {
    const text = $(this)
      .text()
      .trim();
    lensData[i].announced = text;
  });
}

async function getLensType(html) {
  //* load up cheerio
  const $ = cheerio.load(html);

  $('.value .strut .value').each(function(i, elem) {
    const text = $(this)
      .text()
      .trim();
    console.log('text:', text);
    // lensData[i].announced = text;
  });
}

async function gatherLensData(html) {
  getLensNames(html);
  getLensPrices(html);
  getLensAnnounce(html);
  getLensType(html);
  // console.log(info);
  console.log('LensData', lensData);
}

export { getHTML, getLensData, gatherLensData };
