import { motion } from "motion/react";
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center md:space-x-10 space-y-10 md:space-y-0">
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.92}}>
                    <Link to={"/"}>
                        <p className="text-2xl font-bold text-white">Home</p>
                    </Link>
                </motion.div>
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.92}}>
                    <Link to={"/gallery"}>
                        <p className="text-2xl font-bold text-white">Gallery</p>
                    </Link>
                </motion.div>
            </div>
        </>
)
}