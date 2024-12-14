import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ReactPlayer from 'react-player';
import type { VideoWish } from '../../types/video';

interface VideoWishCardProps {
  wish: VideoWish;
}

export default function VideoWishCard({ wish }: VideoWishCardProps) {
  const [isPlaying, setIsPlaying] = useState(false); // Track whether the video is playing

  // Handle play button click
  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="aspect-video relative">
        {/* Conditionally render play button */}
        {!isPlaying && (
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl"
          >
            Play
          </button>
        )}

        {/* ReactPlayer component */}
        <ReactPlayer
          url={wish.fileUrl || wish.url}
          playing={isPlaying} // Control playback based on user interaction
          controls={true} // Show native controls
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { autoplay: 0 }, // Prevent autoplay on YouTube videos
            },
          }}
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{wish.name}</h3>
          <span className="text-sm text-gray-500">
            {new Date(wish.timestamp).toLocaleDateString()}
          </span>
        </div>
        {wish.description && (
          <div className="flex items-start space-x-2">
            <MessageCircle className="w-4 h-4 text-red-500 mt-1" />
            <p className="text-gray-600">{wish.description}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
