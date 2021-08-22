import React from 'react';
import { motion } from 'framer-motion';
import './ThreeDotsWave.scss';

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
    y: '0%',
  },
  end: {
    y: '100%',
  },
};

const circleTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
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

export default ThreeDotsWave;
