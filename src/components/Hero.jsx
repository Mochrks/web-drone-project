import { motion } from "framer-motion";
import styles from "../styles/style";
import { card, dji, drone, icon } from "../assets";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";

import Create from "./More";
import Details from "./Details";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[999] `}
      >
        <motion.div
          variants={textVariant(1.1)}
          className="flex flex-row justify-between items-center w-full z-[999]"
        >
          <img src={dji} alt="dji" className="py-16" />
        </motion.div>

        {/* description */}
        <motion.p
          variants={textVariant(1.1)}
          className={`${styles.paragraph} max-w-[470px]  ss:px-1 z-[999] text-justify  mx-5`}
        >
          Experience the thrill of flying with our advanced and reliable drones!
          Our drones are designed to provide an unparalleled aerial perspective,
          capturing stunning photos and videos from above.
          {/* button */}
          <motion.div
            variants={fadeIn("right", "tween", 0.5, 2)}
            className="flex flex-row "
          >
            <Details styles={` mt-1 `} />
            <Create styles={` mt-1 mx-5`} />
          </motion.div>
        </motion.p>
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 2)}
          className="pt-16 md:pl-1 pl-11 sm:pl-1"
        >
          <img
            src={card}
            alt="card"
            className="cursor-pointer object-contain"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex-1 ${styles.flexStart} flex-col  xl:px-0 sm:px-16 px-6 z-[999]  sm:py-[10%] py-10`}
      >
        <div className="flex flex-col justify-between items-center w-full z-[999]">
          <motion.img
            variants={fadeIn("left", "tween", 0.5, 2)}
            src={drone}
            alt="drone"
            className="py-16 "
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 2)}
            src={icon}
            alt="icons"
          />
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 2)}
            className={`${styles.paragraph} max-w-[570px] mt-5 ss:px-1 z-[999] text-justify mx-5 pt-[70px]`}
          >
            The DJI Mavic Air 2 is a cutting-edge drone designed for
            professional and recreational use. With its 48-megapixel camera, 4K
            video recording, and 3-axis gimbal, the Mavic Air 2 captures
            stunning aerial footage with exceptional clarity and stability.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
