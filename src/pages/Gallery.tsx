import Image from "../components/image.tsx";
import {Navbar} from "../components/Navbar.tsx";
import MetaTags from "../components/MetaTags.tsx";
import { motion } from "motion/react";

export default function Gallery() {
    return(
        <>
            <MetaTags title="Mamawsheart - Gallery!"
                      name="Mamawsheart"
                      description="View our lovely images!"
                      image="https://utfs.io/f/QI8sw9xDXLhG7N2LxxPGTW2ZDCGlgBULJ7VbdyN0QksOw83P"/>
            <Navbar/>
            <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 100}}
                transition={{duration: 0.75, type: "spring", bounce: 0.3}}
            >
                <h1 className="text-center text-4xl font-bold mt-10 mb-10">Christmas Gallery</h1>
                <Image
                    picture2={"https://utfs.io/f/BVLubM78Upse0ECxNZWVsaAInbkGc3Qf6Et5RO7SD2NwWyvT"}
                    title2={"grandmasmol"}
                    picture3={"https://utfs.io/f/BVLubM78Upsejxye9XDo7LUs8ZbOJwSTxRcNe2WADKYjfuQH"}
                    title3={"cool place ig"}
                    picture4={"https://utfs.io/f/BVLubM78UpseivloX9cI4fy7ELaBzrZhWknJmVH9RNU35qsS"}
                    title4={"hmm"}
                />
                <Image
                    picture2={"https://utfs.io/f/BVLubM78UpseB1degV78Upse0xycIWzGgohRaATkK21lCfq5"}
                    title2={"nice"}
                    picture4={"https://utfs.io/f/BVLubM78UpselAdzltFJHdvSi92Xxk13EDM0lIqpThgrOtWU"}
                    title4={"cool"}
                />
                <Image
                    picture1="https://utfs.io/f/BVLubM78UpseZO2SwnQ3DTaUR7sm480vKJrExO1NePjIMZuB"
                    title1="cool party"
                    picture2="https://utfs.io/f/BVLubM78UpseHD8fy6OAPGYEm34cunJWU8pqNzvyaDltfOhe"
                    title2="nice meeting"
                    picture4="https://utfs.io/f/BVLubM78Upsezp7ikoHMAL1myXcUseNK28DwOBd0xuTI93bR"
                    title4="stadium"
                />
                <Image
                    picture1="https://utfs.io/f/BVLubM78Upseqiailf6nl4idxHgYfLBPNTA5r23Rae8vhZcV"
                    title1="beach ig"
                    picture3="https://utfs.io/f/BVLubM78Upseqn52KZ6nl4idxHgYfLBPNTA5r23Rae8vhZcV"
                    title3="another beach"
                />
                <Image
                    picture2="https://utfs.io/f/BVLubM78Upse9mPd4pEMjwGrRFguVHk2WyfnOUqS64oicxl1"
                    title2="papa"
                    picture3="https://utfs.io/f/BVLubM78UpseW3CcAYZSZNjywdB1eWxYAU3b9Dals8GfLPC0"
                    title3="smol grandma"
                    picture4="https://utfs.io/f/BVLubM78Upse2ECAMNy40H9CAGkVMUueX6Q8Btn7RLJphvz5"
                    title4="teen"
                    picture1="https://utfs.io/f/BVLubM78UpseDOoIYIlPM2tCu8FkIEAce3oaxWYm0G9UhSZB"
                    title1="kid"
                />
            </motion.div>
        </>
    )
}