import styles from "../styles/style";
import { layout } from "../styles/style";
import { dr1, dr2, dr3, dr4 } from "../assets";
import { motion } from "framer-motion";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";

const HotDrop = () => (
  <motion.section
    variants={textVariant(1.1)}
    initial="hidden"
    whileInView="show"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-discount-gradient rounded-[20px] box-shadow`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${layout.sectionImg} flex-col`}
    >
      <motion.p
        variants={textVariant(1.1)}
        className={`${styles.paragraph} max-w-full mt-5  text-center`}
      >
        Parts & Services
      </motion.p>
      <motion.h2
        variants={fadeIn("right", "tween", 0.5, 2)}
        className={`${styles.heading2} text-center`}
      >
        SHOP ONLINE
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={fadeIn("left", "tween", 0.5, 2)}
        className="w-full flex sm:flex-row flex-col "
      >
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={dr1}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={dr2}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={dr3}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
        <div className="w-full md:mt-10 mt-6 sm:mx-3 mx-1">
          <img
            src={dr4}
            alt="nft"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </div>
      </motion.div>
    </motion.div>
  </motion.section>
);

export default HotDrop;
