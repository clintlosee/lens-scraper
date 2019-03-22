import rp from 'request-promise';
import $ from 'cheerio';

let lensData = {};

//* Function to pull out specific item text
// function itemSpec(selector, pageHtml, sliceVal) {
//   return $(selector, pageHtml)
//     .slice(sliceVal)
//     .eq(0)
//     .text()
//     .trim();
// }

function getSpecLabel(pageHtml, sliceVal) {
  return $('.specificationsPage .label', pageHtml)
    .slice(sliceVal)
    .eq(0)
    .text()
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    .split(' ')
    .join('');
}

function getSpecValue(pageHtml, sliceVal) {
  return $('.specificationsPage .value', pageHtml)
    .slice(sliceVal)
    .eq(0)
    .text()
    .trim();
}

async function urlParse(url) {
  return rp(url)
    .then(html => {
      let itemLabel;
      let itemValue;
      const labels = $('.specificationsPage .label', html);
      const lensName = $('.mainContent h1', html)
        .text()
        .trim();

      // const lensType = $('.specificationsPage .value', html)
      //   .slice(0)
      //   .eq(0)
      //   .text()
      //   .trim();
      // const maxFormatSize = $('.specificationsPage .value', html)
      //   .slice(1)
      //   .eq(0)
      //   .text()
      //   .trim();
      // const focalLength = itemSpec('.specificationsPage .value', html, 2);
      // const imageStabilization = itemSpec(
      //   '.specificationsPage .value',
      //   html,
      //   3
      // );
      // const lensMount = itemSpec('.specificationsPage .value', html, 4);
      // console.log('lensName:', lensName);

      for (let i = 0; i < labels.length; i++) {
        itemLabel = getSpecLabel(html, i);
        itemValue = getSpecValue(html, i);

        lensData = {
          ...lensData,
          name: lensName,
          [itemLabel]: itemValue,
        };
      }

      return lensData;

      // return {
      //   name: lensName,
      //   type: lensType,
      //   maxFormat: maxFormatSize,
      //   fLength: focalLength,
      //   [label]: value,
      //   mount: lensMount,
      // };
    })
    .catch(err => console.log(err));
}

export { urlParse };
