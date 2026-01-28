// Transition configurations for consistent timing and easing

export const defaultTransition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const fastTransition = {
  duration: 0.2,
  ease: "easeOut",
};

export const slowTransition = {
  duration: 0.8,
  ease: "easeInOut",
};

export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const bouncySpring = {
  type: "spring",
  stiffness: 400,
  damping: 10,
};

export const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const pageTransitionConfig = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: defaultTransition,
};

export const staggerTransition = {
  staggerChildren: 0.1,
  delayChildren: 0.2,
};

export const cardTransition = {
  duration: 0.3,
  ease: "easeOut",
};

export const hoverTransition = {
  duration: 0.2,
  ease: "easeInOut",
};
