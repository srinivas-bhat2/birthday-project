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
        Happy Birthday to the most incredible woman I have ever known. Today, the world celebrates you, but my heart celebrates you every single day.
        </p>
        
        <p>
        You are the laughter i need in my lows, the calm in my chaos, and the spark that lights up my entire being. Since you walked into my life, everything has been brighter, warmer, and filled with a love I never thought I deserved. You’ve turned ordinary moments into extraordinary memories, and for that, I am endlessly grateful.
        </p>
        
        <p>
        On this special day, I want you to know how much you mean to me. Every laugh, every glance, every shared moment has been a gift that I treasure deeply.
        </p>
        
        <p>
        May your day be as beautiful as your smile, as magical as your laughter, and as precious as your love. I can’t wait to celebrate you and make you feel as special as you truly are.

Thank you for being you—my partner, my love, my pollamma. I am so lucky to call you mine.
        </p>
        
        <p className="text-right">
          Forever yours,<br />
          Sri ❤️
        </p>
      </div>
    </motion.div>
  );
}