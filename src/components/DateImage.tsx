import {motion} from "motion/react";

export default function DateImage({
                                      picture1_1 = '', picture1_2 = '', picture1_3 = '', picture1_4 = '',
                                      picture2_1 = '', picture2_2 = '', picture2_3 = '', picture2_4 = '',
                                      picture3_1 = '', picture3_2 = '', picture3_3 = '', picture3_4 = '',
                                      picture4_1 = '', picture4_2 = '', picture4_3 = '', picture4_4 = '',
                                      picture5_1 = '', picture5_2 = '', picture5_3 = '', picture5_4 = '',
                                      picture6_1 = '', picture6_2 = '', picture6_3 = '', picture6_4 = '',
                                      picture7_1 = '', picture7_2 = '', picture7_3 = '', picture7_4 = '',
                                      picture8_1 = '', picture8_2 = '', picture8_3 = '', picture8_4 = '',
                                      picture9_1 = '', picture9_2 = '', picture9_3 = '', picture9_4 = '',
                                      picture10_1 = '', picture10_2 = '', picture10_3 = '', picture10_4 = '',
                                      picture11_1 = '', picture11_2 = '', picture11_3 = '', picture11_4 = '',
                                      picture12_1 = '', picture12_2 = '', picture12_3 = '', picture12_4 = '',
                                      picture13_1 = '', picture13_2 = '', picture13_3 = '', picture13_4 = '',
                                      picture14_1 = '', picture14_2 = '', picture14_3 = '', picture14_4 = '"',
                                      picture15_1 = '', picture15_2 = '', picture15_3 = '', picture15_4 = '',
                                      picture16_1 = '', picture16_2 = '', picture16_3 = '', picture16_4 = '',
                                      picture17_1 = '', picture17_2 = '', picture17_3 = '', picture17_4 = '',
                                      picture18_1 = '', picture18_2 = '', picture18_3 = '', picture18_4 = '',
                                      picture19_1 = '', picture19_2 = '', picture19_3 = '', picture19_4 = '',
                                      picture20_1 = '', picture20_2 = '', picture20_3 = '', picture20_4 = '',
                                      picture21_1 = '', picture21_2 = '', picture21_3 = '', picture21_4 = '',
                                      picture22_1 = '', picture22_2 = '', picture22_3 = '', picture22_4 = '',
                                      picture23_1 = '', picture23_2 = '', picture23_3 = '', picture23_4 = '',
                                      picture24_1 = '', picture24_2 = '', picture24_3 = '', picture24_4 = '',
                                      picture25_1 = '', picture25_2 = '', picture25_3 = '', picture25_4 = '',
                                      picture26_1 = '', picture26_2 = '', picture26_3 = '', picture26_4 = '',
                                      picture27_1 = '', picture27_2 = '', picture27_3 = '', picture27_4 = '',
                                      picture28_1 = '', picture28_2 = '', picture28_3 = '', picture28_4 = '',
                                      picture29_1 = '', picture29_2 = '', picture29_3 = '', picture29_4 = '',
                                      picture30_1 = '', picture30_2 = '', picture30_3 = '', picture30_4 = '',
                                      picture31_1 = '', picture31_2 = '', picture31_3 = '', picture31_4 = ''
                                  }) {
    const dateCalc = new Date();
    const date = dateCalc.getDate();
    const month = dateCalc.getMonth() + 1;

    let picture1date, picture2date, picture3date, picture4date = "";

    if (date == 1) {
        picture1date = picture1_1;
        picture2date = picture1_2;
        picture3date = picture1_3;
        picture4date = picture1_4;
    } else if (date == 2) {
        picture1date = picture2_1;
        picture2date = picture2_2;
        picture3date = picture2_3;
        picture4date = picture2_4;
    } else if (date == 3) {
        picture1date = picture3_1;
        picture2date = picture3_2;
        picture3date = picture3_3;
        picture4date = picture3_4;
    } else if (date == 4) {
        picture1date = picture4_1;
        picture2date = picture4_2;
        picture3date = picture4_3;
        picture4date = picture4_4;
    } else if (date == 5) {
        picture1date = picture5_1;
        picture2date = picture5_2;
        picture3date = picture5_3;
        picture4date = picture5_4;
    } else if (date == 6) {
        picture1date = picture6_1;
        picture2date = picture6_2;
        picture3date = picture6_3;
        picture4date = picture6_4;
    } else if (date == 7) {
        picture1date = picture7_1;
        picture2date = picture7_2;
        picture3date = picture7_3;
        picture4date = picture7_4;
    } else if (date == 8) {
        picture1date = picture8_1;
        picture2date = picture8_2;
        picture3date = picture8_3;
        picture4date = picture8_4;
    } else if (date == 9) {
        picture1date = picture9_1;
        picture2date = picture9_2;
        picture3date = picture9_3;
        picture4date = picture9_4;
    } else if (date == 10) {
        picture1date = picture10_1;
        picture2date = picture10_2;
        picture3date = picture10_3;
        picture4date = picture10_4;
    } else if (date == 11) {
        picture1date = picture11_1;
        picture2date = picture11_2;
        picture3date = picture11_3;
        picture4date = picture11_4;
    } else if (date == 12) {
        picture1date = picture12_1;
        picture2date = picture12_2;
        picture3date = picture12_3;
        picture4date = picture12_4;
    } else if (date == 13) {
        picture1date = picture13_1;
        picture2date = picture13_2;
        picture3date = picture13_3;
        picture4date = picture13_4;
    } else if (date == 14) {
        picture1date = picture14_1;
        picture2date = picture14_2;
        picture3date = picture14_3;
        picture4date = picture14_4;
    } else if (date == 15) {
        picture1date = picture15_1;
        picture2date = picture15_2;
        picture3date = picture15_3;
        picture4date = picture15_4;
    } else if (date == 16) {
        picture1date = picture16_1;
        picture2date = picture16_2;
        picture3date = picture16_3;
        picture4date = picture16_4;
    } else if (date == 17) {
        picture1date = picture17_1;
        picture2date = picture17_2;
        picture3date = picture17_3;
        picture4date = picture17_4;
    } else if (date == 18) {
        picture1date = picture18_1;
        picture2date = picture18_2;
        picture3date = picture18_3;
        picture4date = picture18_4;
    } else if (date == 19) {
        picture1date = picture19_1;
        picture2date = picture19_2;
        picture3date = picture19_3;
        picture4date = picture19_4;
    } else if (date == 20) {
        picture1date = picture20_1;
        picture2date = picture20_2;
        picture3date = picture20_3;
        picture4date = picture20_4;
    } else if (date == 21) {
        picture1date = picture21_1;
        picture2date = picture21_2;
        picture3date = picture21_3;
        picture4date = picture21_4;
    } else if (date == 22) {
        picture1date = picture22_1;
        picture2date = picture22_2;
        picture3date = picture22_3;
        picture4date = picture22_4;
    } else if (date == 23) {
        picture1date = picture23_1;
        picture2date = picture23_2;
        picture3date = picture23_3;
        picture4date = picture23_4;
    } else if (date == 24) {
        picture1date = picture24_1;
        picture2date = picture24_2;
        picture3date = picture24_3;
        picture4date = picture24_4;
    } else if (date == 25) {
        picture1date = picture25_1;
        picture2date = picture25_2;
        picture3date = picture25_3;
        picture4date = picture25_4;
    } else if (date == 26) {
        picture1date = picture26_1;
        picture2date = picture26_2;
        picture3date = picture26_3;
        picture4date = picture26_4;
    } else if (date == 27) {
        picture1date = picture27_1;
        picture2date = picture27_2;
        picture3date = picture27_3;
        picture4date = picture27_4;
    } else if (date == 28) {
        picture1date = picture28_1;
        picture2date = picture28_2;
        picture3date = picture28_3;
        picture4date = picture28_4;
    } else if (date == 29) {
        picture1date = picture29_1;
        picture2date = picture29_2;
        picture3date = picture29_3;
        picture4date = picture29_4;
    } else if (date == 30) {
        picture1date = picture30_1;
        picture2date = picture30_2;
        picture3date = picture30_3;
        picture4date = picture30_4;
    } else if (date == 31) {
        picture1date = picture31_1;
        picture2date = picture31_2;
        picture3date = picture31_3;
        picture4date = picture31_4;
    }

    let stylesm1 = "object-cover rounded-2xl w-52 h-52";
    let stylesm2 = "object-cover rounded-2xl w-52 h-52";
    let stylesm3 = "object-cover rounded-2xl w-52 h-52";
    let stylesm4 = "object-cover rounded-2xl w-52 h-52";

    if (picture1date == '') {
        stylesm1 = "md:w-52 md:h-52 rounded-none hidden";
    }
    if (picture2date == '') {
        stylesm2 = "md:w-52 md:h-52 rounded-none hidden";
    }
    if (picture3date == '') {
        stylesm3 = "md:w-52 md:h-52 rounded-none hidden";
    }
    if (picture4date == '') {
        stylesm4 = "md:w-52 md:h-52 rounded-none hidden";
    }
    if (picture1date == '' && picture2date == '' && picture3date == '' && picture4date == '') {
        return (
            <>
                <h1 className="font-bold text-2xl">{date}/{month}</h1>
                <h2 className="text-xl mt-4">No images for today :(</h2>
            </>
        );
    } else {
        return (
            <>
                <h1 className="font-bold text-2xl">{date}/{month}</h1>
                <div
                    className="flex flex-col md:flex-row mt-5 items-center md:space-x-10 space-y-5 md:space-y-0 justify-center">
                    <motion.div whileHover={{scale: 1.05}}>
                        <img src={picture1date} className={stylesm1} alt=""/>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.05}}>
                        <img src={picture2date} className={stylesm2} alt=""/>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.05}}>
                        <img src={picture3date} className={stylesm3} alt=""/>
                    </motion.div>
                    <motion.div whileHover={{scale: 1.05}}>
                        <img src={picture4date} className={stylesm4} alt=""/>
                    </motion.div>
                </div>
            </>
        )
    }
}