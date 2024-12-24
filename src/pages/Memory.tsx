import {Navbar} from "../components/Navbar.tsx";
import DateImage from "../components/DateImage.tsx";
import MetaTags from "../components/MetaTags.tsx";
import { motion } from "motion/react";

export default function Memory() {
    return(
        <>
            <MetaTags title="Mamawsheart - Memory of the day!"
                      name="Mamawsheart"
                      description="Shows images based on the current day!"
                      image="https://utfs.io/f/QI8sw9xDXLhG7N2LxxPGTW2ZDCGlgBULJ7VbdyN0QksOw83P"/>
            <Navbar/>
            <motion.div
                initial={{opacity: 0, x: -100}}
                transition={{duration: 0.75, type: "spring", bounce: 0.3}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                >
                <h1 className="text-center text-4xl font-bold mt-10 mb-10">Memory of the day!</h1>
                <DateImage
                    picture1_1={"https://utfs.io/f/BVLubM78UpseDOoIYIlPM2tCu8FkIEAce3oaxWYm0G9UhSZB"}
                    picture1_3={"https://utfs.io/f/BVLubM78Upse2ECAMNy40H9CAGkVMUueX6Q8Btn7RLJphvz5"}
                    picture2_4={"https://utfs.io/f/BVLubM78UpseW3CcAYZSZNjywdB1eWxYAU3b9Dals8GfLPC0"}
                    picture3_1={"https://utfs.io/f/BVLubM78Upse9mPd4pEMjwGrRFguVHk2WyfnOUqS64oicxl1"}
                    picture4_2={"https://utfs.io/f/BVLubM78Upseqn52KZ6nl4idxHgYfLBPNTA5r23Rae8vhZcV"}
                    picture5_2={"https://utfs.io/f/BVLubM78Upseqiailf6nl4idxHgYfLBPNTA5r23Rae8vhZcV"}

                />
            </motion.div>
        </>
    )
}