import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Recent Masterpieces</span>
            <p style={{marginTop: "10px"}} className={css.text}>A Showcase of My Web Development Expertise</p>
          </div>
          <a href="https://github.com/anupammaurya6767" target="_blank" ><span className="secondaryText">Explore More Works</span></a>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showcase.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showcase2.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showcase3.png" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
