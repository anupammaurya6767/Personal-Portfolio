import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className={`primaryText ${css.text}`}>
          Say Hi and Connect with me Let's Connect <br />
          and Build something 
          </span>
          <span className="primaryText">
          great  <a href="https://www.linkedin.com/in/anupam-maurya-b9a04a225/" target="_blank">together</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p className={css.text}>New Delhi, India</p>
          </div>
          <ul className={css.menu}>
            <li>Services</li>
            <li>Works</li>
            <li>Notes</li>
            <li>Experience</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
