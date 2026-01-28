import { motion } from "motion/react";
import { useInView } from "../animations/hooks";
import { useReducedMotion } from "../animations/hooks";
import { useRef } from "react";
import { slideUp } from "../animations/variants";

/**
 * Reusable animated section wrapper
 * Animates content when it comes into view
 * Respects prefers-reduced-motion for accessibility
 */
function AnimatedSection({
  children,
  className = "",
  variant = slideUp,
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, use minimal animation
  const animationVariant = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : variant;

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={animationVariant}
      transition={prefersReducedMotion ? { duration: 0.1 } : { delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
