import React, { useState } from "react";
import Confetti from "react-confetti";
import WelcomeHeader from "./girlfriend/WelcomeHeader";
import LoveLetterCard from "./girlfriend/LoveLetterCard";
import VideoWishesSection from "./girlfriend/VideoWishesSection";
import PhotoGallery from "./shared/PhotoGallery";
import { motion } from "framer-motion";
import "./gf.css";

export default function GirlfriendDashboard() {
  const [showAnimation, setShowAnimation] = useState(false); // Controls animation
  const phrase = "Jayashree is beautiful";

  const toggleAnimation = () => {
    setShowAnimation((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-50 relative overflow-hidden">
      {/* Confetti effect */}
      <Confetti numberOfPieces={100} recycle={false} />

      <div className="container mx-auto px-4 py-8">
        <WelcomeHeader />

        <div className="mb-12">
          <LoveLetterCard />
        </div>

        {/* Button to toggle animation */}
        <div className="flex justify-center my-8">
          <button
            onClick={toggleAnimation}
            className="px-8 py-4 bg-gradient-to-r from-pink-400 to-red-500 text-white text-2xl font-bold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            {showAnimation ? "Stop the Magic ✨" : "Start the Magic ✨"}
          </button>
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
      </div>

      {/* Animated Falling Words */}
      {showAnimation && (
        <div className="animated-words-container">
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="animated-word text-lg font-bold text-pink-700"
              initial={{
                y: -100, // Start above the screen
                x: Math.random() * window.innerWidth, // Random horizontal position
                opacity: 0, // Start invisible
              }}
              animate={{
                y: window.innerHeight + 100, // Fall past the bottom of the screen
                opacity: [0, 1, 0], // Fade in, then fade out
              }}
              transition={{
                duration: 5 + Math.random() * 2, // Random duration
                ease: "easeInOut", // Smooth easing
                repeat: Infinity, // Continuous falling
                delay: Math.random() * 2, // Staggered start
              }}
            >
              {phrase}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
