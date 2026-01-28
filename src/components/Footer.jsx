import { motion } from "motion/react";
import { fadeIn, textReveal } from "../animations/variants";

function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.p
        variants={textReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Made with{" "}
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          style={{ display: "inline-block" }}
        >
          ❤️
        </motion.span>{" "}
        in Uttarakhand | © 2026 Uttarakhand Travel Blog
      </motion.p>
      <motion.p
        style={{ marginTop: "0.5rem", fontSize: "0.9rem", opacity: "0.9" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 0.9, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        Exploring the Land of Gods, one destination at a time
      </motion.p>
    </motion.footer>
  );
}

export default Footer;
