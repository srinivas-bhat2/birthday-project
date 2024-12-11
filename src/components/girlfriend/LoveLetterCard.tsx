import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function LoveLetterCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto"
    >
      <div className="flex justify-center mb-6">
        <Heart className="w-12 h-12 text-red-500" />
      </div>
      
      <div className="space-y-6 font-handwriting text-xl leading-relaxed text-gray-700">
        <p>My dearest Pollamma,</p>
        
        <p>
          As I write this letter, my heart overflows with love and gratitude for having you in my life.
          Today is not just another day—it's a celebration of the most beautiful soul I've ever known.
        </p>
        
        <p>
          Your smile brightens my darkest days, your love gives me strength, and your presence makes
          my world complete. Every moment with you feels like a precious gift, and I cherish each
          one deeply.
        </p>
        
        <p>
          On your special day, I want you to know that you mean everything to me. Your kindness,
          your grace, your infectious laughter—every little thing about you makes me fall in love
          with you more each day.
        </p>
        
        <p>
          May this year bring you all the joy, success, and happiness you deserve. I promise to
          stand by your side, hold your hand, and love you more with each passing day.
        </p>
        
        <p className="text-right">
          Forever yours,<br />
          Sri ❤️
        </p>
      </div>
    </motion.div>
  );
}