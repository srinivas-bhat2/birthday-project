import React from 'react';
import Confetti from 'react-confetti';
import WelcomeHeader from './girlfriend/WelcomeHeader';
import LoveLetterCard from './girlfriend/LoveLetterCard';
import VideoWishesSection from './girlfriend/VideoWishesSection';
import PhotoGallery from './shared/PhotoGallery';
import { motion } from 'framer-motion';  // Import framer-motion
import "./gf.css"

export default function GirlfriendDashboard() {
  const words = ["Love", "Joy", "Happiness", "Together", "Memories", "Forever"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-50">
      <Confetti numberOfPieces={100} recycle={false} />

      <div className="container mx-auto px-4 py-8">
        <WelcomeHeader />

        <div className="mb-12">
          <LoveLetterCard />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 font-handwriting">
            Birthday Wishes From Friends
          </h2>
          <VideoWishesSection />
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8 font-handwriting">
            Our Beautiful Journey Together
          </h2>
          <PhotoGallery />
        </div>

        {/* Falling words effect */}
        <div className="falling-words-container">
          {words.map((word, index) => (
            <motion.div
              key={index}
              initial={{ y: -100 }}  // Start above the screen
              animate={{ y: "100vh" }}  // Animate to the bottom of the screen
              transition={{
                duration: 10 + Math.random(),  // Random duration for variation
                ease: "easeIn",  // Ease function for smoother animation
                repeat: Infinity,  // Make the animation repeat
                delay: index * 0.2,  // Delay each word slightly for a staggered effect
              }}
              className="falling-word"
            >
              {word}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
