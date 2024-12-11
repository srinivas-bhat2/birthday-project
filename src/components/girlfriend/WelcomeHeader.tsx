import React from 'react';
import { motion } from 'framer-motion';

export default function WelcomeHeader() {
  return (
    <div className="text-center mb-12">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-6xl font-bold text-red-600 mb-4"
      >
        Happy Birthday, Pollamma! 🎉
      </motion.h1>
      <p className="text-xl text-gray-700 font-handwriting">
        My love, my life, my everything ❤️
      </p>
    </div>
  );
}