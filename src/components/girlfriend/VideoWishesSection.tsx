import React from 'react';
import { useVideoWishes } from '../../hooks/useVideoWishes';
import VideoWishCard from './VideoWishCard';
import { Loader } from 'lucide-react';

export default function VideoWishesSection() {
  const { wishes, loading } = useVideoWishes();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader className="w-8 h-8 text-red-500 animate-spin" />
      </div>
    );
  }

  if (wishes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 font-handwriting text-xl">
          No video wishes yet. Your friends will add them soon! 💝
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {wishes.map((wish) => (
        <VideoWishCard key={wish.id} wish={wish} />
      ))}
    </div>
  );
}