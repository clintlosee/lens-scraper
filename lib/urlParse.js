import rp from 'request-promise';
import $ from 'cheerio';

// const lensData = {};

async function urlParse(url) {
  return rp(url)
    .then(html => {
      const lensType = $('.specificationsPage .value', html)
        .slice(0)
        .eq(0)
        .text()
        .trim();
      const maxFormatSize = $('.specificationsPage .value', html)
        .slice(1)
        .eq(0)
        .text()
        .trim();
      console.log('maxFormatSize:', maxFormatSize);

      return {
        lensName: $('.mainContent h1', html)
          .text()
          .trim(),
        lensType,
        maxFormatSize,
      };

      // console.log(html);
      // ()
    })
    .catch(err => console.log(err));
}

export { urlParse };

// html => {
//   lensData.lensName = $('.mainContent h1', html)
//     .text()
//     .trim();

//   $('.specTable .label', html).each(item => {
//     console.log(item);
//   });

//   return lensData;
// }
