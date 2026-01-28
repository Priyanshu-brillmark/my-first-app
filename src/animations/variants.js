// Shared animation variants for consistent animations across the app

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export const slideDown = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

export const slideLeft = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export const slideRight = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

export const scaleUp = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
};

export const bounceIn = {
  initial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  exit: { opacity: 0, scale: 0.3 },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -180 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: 180 },
};

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: { opacity: 0 },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const cardHover3D = {
  rest: { scale: 1, rotateY: 0, rotateX: 0 },
  hover: {
    scale: 1.05,
    rotateY: 5,
    rotateX: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const buttonHover = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(102, 126, 234, 0)" },
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 20px rgba(102, 126, 234, 0.4)",
    transition: {
      duration: 0.2,
    },
  },
  tap: { scale: 0.95 },
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

export const mobileMenuVariants = {
  closed: {
    x: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const iconRotate = {
  rest: { rotate: 0 },
  hover: {
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const iconBounce = {
  rest: { y: 0 },
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const flipCard = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

export const shake = {
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
    },
  },
};

export const pulse = {
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const glow = {
  rest: { boxShadow: "0px 0px 0px rgba(102, 126, 234, 0)" },
  glow: {
    boxShadow: "0px 0px 20px rgba(102, 126, 234, 0.6)",
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
