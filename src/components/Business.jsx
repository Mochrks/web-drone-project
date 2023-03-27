import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import {
  textVariant,
  slideIn,
  fadeIn,
  textVariant2,
  staggerContainer,
} from "../utils/motion.js";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card glassmorphism`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section
    id="features"
    className="flex md:flex-row flex-col sm:py-[200px] py-6"
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={layout.sectionInfo}
    >
      <motion.h2 variants={textVariant(1.1)} className={styles.heading2}>
        Unleash Your Creativity , <br className="sm:block hidden" /> with
        High-Tech Drones for Aerial Photography and Videography.
      </motion.h2>

      <motion.p
        variants={textVariant(1.1)}
        className={`${styles.paragraph} max-w-[570px] mt-5`}
      >
        With advanced features such as obstacle avoidance, follow-me mode, and
        4K video, our drones are the perfect tool for photographers,
        videographers, and hobbyists alike. Whether you're looking to capture
        breathtaking landscapes, action-packed sports events, or simply have fun
        flying, our drones are up for the task. Shop now and take your
        photography and videography to new heights!
      </motion.p>
      <motion.div
        variants={fadeIn("up", "tween", 0.5, 2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Button styles={`mt-10`} />
      </motion.div>
    </motion.div>

    <motion.div
      variants={fadeIn("left", "tween", 0.5, 2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${layout.sectionImg} flex-col`}
    >
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </motion.div>
  </section>
);

export default Business;
