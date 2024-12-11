import React from 'react';
import Confetti from 'react-confetti';
import WelcomeHeader from './WelcomeHeader';
import LoveLetterCard from './LoveLetterCard';
import VideoWishesSection from './VideoWishesSection';
import PhotoGallery from '../shared/PhotoGallery';

export default function GirlfriendDashboard() {
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
            Birthday Wishes From Friends 💝
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
    </div>
  );
}