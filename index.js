import { getHTML, getLensData, gatherLensData } from './lib/scraper';

// const sonyURL = `https://www.dpreview.com/products/compare/side-by-side?products=sony_fe_135_1p8_gm&products=sony_fe_24_1p4_gm&products=sony_fe_400_2p8_gm_oss&products=sony_e_18-135_3p5_5p6_oss&products=sony_fe_24-105_4p0_g_oss&products=sony_fe_12-24_4_g&products=sony_fe_16-35_2p8_gm&products=sony_fe_100-400_4p5-5p6_gm_oss&products=sony_fe_100_2p8_stf_gm_oss&products=sony_fe_85_1p8&products=sony_fe_50_2p8_macro&products=sony_fe_50_1p4_za&products=sony_fe_70-300_4p5-5p6_g_oss&products=sony_fe_50_1p8&products=sony_fe_24-70_2p8_gm&products=sony_fe_70-200_2p8_gm_oss&products=sony_fe_85mm_1p4_gm&products=sony_28_f2&products=sony_fe_35_1p4_za&products=sony_fe_90_2p8_macro_g_oss&products=sony_fe_24-240_3p5-6p3_oss&products=sony_zeiss_16-35_f4_za_oss&products=sony_fe_pz_28-135_4_g_oss&products=sony_zeiss_fe_35_2p8_za&products=sony_zeiss_fe_55_1p8_za&products=sony_zeiss_fe_24_70_4p0_za_oss&products=sony_zeiss_fe_70_200_4_oss&products=sony_fe_28-70_3p5-5p6&products=sony_e_16_70_4_oss&products=sony_e_pz_18_105_4_g_oss&products=sony_e_20_2p8&products=sony_e_10-18_4&products=sony_e_16-50_3p5-5p6&products=sony_e_35_1p8&products=sony_e_18-200_pw&products=sony_e_18-200_3p5-6p3_le&products=sony_e_24_1p8&products=sony_e_50_1p8&products=sony_e_55-210_4p5-6p3&products=sony_e_30_3p5_macro&products=sony_e_18-200_3p5-6p3&products=sony_e_18-55_3p5-5p6_oss&products=sony_e_16_2p8`;
// const sonyURL2 = `https://www.dpreview.com/products/compare/side-by-side?products=sony_fe_24_1p4_gm&products=sony_fe_400_2p8_gm_oss`;
const sonyLensesURL = `https://www.dpreview.com/products/sony/lenses?subcategoryId=lenses&page=1`;

async function go() {
  getLensData(sonyLensesURL);
  // gatherLensData(await getHTML(sonyURL2));
}

go();
