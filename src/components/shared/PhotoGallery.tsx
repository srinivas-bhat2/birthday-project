import React from 'react';
import { motion } from 'framer-motion';
import { PHOTOS } from '../../utils/constants';

export default function PhotoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {PHOTOS.map((photo, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="relative rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={photo}
            alt={`Memory ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}