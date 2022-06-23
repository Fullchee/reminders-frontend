import React from "react";
import { motion } from "framer-motion";
import "./LoadingIndicator.scss";

// Learned about framer motion and this loading animation from
// www.youtube.com/watch?v=aHqTM0WFdpk

const containerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const circleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const circleTransition: any = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

export function ThreeDotsWave() {
  return (
    <motion.div
      className="loading-container"
      variants={containerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        className="loading-circle"
        variants={circleVariants}
        transition={circleTransition}
      ></motion.span>
      <motion.span
        className="loading-circle"
        variants={circleVariants}
        transition={circleTransition}
      ></motion.span>
      <motion.span
        className="loading-circle"
        variants={circleVariants}
        transition={circleTransition}
      ></motion.span>
    </motion.div>
  );
}

export function LoadingIndicator() {
  return (
    <div className="overlay">
      <div className="form-loading-container">
        <ThreeDotsWave />
      </div>
    </div>
  );
}
