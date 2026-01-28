import { motion } from "motion/react";

/**
 * Animated loading spinner component
 */
function LoadingSpinner({ size = 40, color = "#667eea" }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <motion.div
        style={{
          width: size,
          height: size,
          border: `4px solid ${color}20`,
          borderTop: `4px solid ${color}`,
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export default LoadingSpinner;
