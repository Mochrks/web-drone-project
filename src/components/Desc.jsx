import { remote } from "../assets";
import styles, { layout } from "../styles/style";
import { motion } from "framer-motion";
import Button2 from "./Button2";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
  zoomIn,
  planetVariants,
} from "../utils/motion.js";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <motion.img
        variants={fadeIn("right", "tween", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        src={remote}
        alt="remote"
        className="w-[100%] h-[100%] relative z-[5]"
      />
    </div>

    <motion.div
      variants={fadeIn("left", "tween", 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={layout.sectionInfo}
    >
      <h2 className={styles.heading2}>Easily To FLY</h2>
      <p className={`${styles.paragraph} max-w-[670px] mt-5 z-[5]`}>
        The DJI Mavic Air can navigate complex environments with ease, making it
        ideal for capturing stunning aerial footage and photos. The drone's
        compact design also allows for effortless portability, enabling users to
        take it with them on their travels and capture breathtaking footage from
        new perspectives.
      </p>
      <Button2 styles={`mt-10`} />
    </motion.div>
  </section>
);

export default Billing;
