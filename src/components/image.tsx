import { motion } from "motion/react"

export default function Image({picture1 = '', picture2 = '', picture3 = '', picture4 = '', title1 = '', title2 = '', title3 = '', title4 = ''}) {
    let styles1 = "object-cover rounded-2xl w-52 h-52";
    let styles2 = "object-cover rounded-2xl w-52 h-52";
    let styles3 = "object-cover rounded-2xl w-52 h-52";
    let styles4 = "object-cover rounded-2xl w-52 h-52";

    if (picture1 == '') {
        styles1 = "md:invisible md:w-52 md:h-52 rounded-none min-[0px]:max-md:hidden";
    }
    if (picture2 == '') {
        styles2 = "md:invisible md:w-52 md:h-52 rounded-none min-[0px]:max-md:hidden";
    }
    if (picture3 == '') {
        styles3 = "md:invisible md:w-52 md:h-52 rounded-none min-[0px]:max-md:hidden";
    }
    if (picture4 == '') {
        styles4 = "md:invisible md:w-52 md:h-52 rounded-none min-[0px]:max-md:hidden";
    }

    return (
        <>
            <div
                className="flex flex-col md:flex-row items-center md:space-x-10 space-y-5 md:space-y-0 mt-6 justify-center">
                <motion.div whileHover={{scale: 1.05}}>
                    <img src={picture1} className={styles1} alt={title1}/>
                </motion.div>
                <motion.div whileHover={{scale: 1.05}}>
                    <img src={picture2} className={styles2} alt={title2}/>
                </motion.div>
                <motion.div whileHover={{scale: 1.05}}>
                    <img src={picture3} className={styles3} alt={title3}/>
                </motion.div>
                <motion.div whileHover={{scale: 1.05}}>
                    <img src={picture4} className={styles4} alt={title4}/>
                </motion.div>
            </div>
        </>
);
}
