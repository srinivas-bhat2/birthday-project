import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import type { VideoWish } from '../../types/video';

interface VideoWishCardProps {
  wish: VideoWish;
}

export default function VideoWishCard({ wish }: VideoWishCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://player.vimeo.com/video/${wish.vimeoId}`}
          title={`Birthday wish from ${wish.name}`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{wish.name}</h3>
          <span className="text-sm text-gray-500">
            {new Date(wish.timestamp).toLocaleDateString()}
          </span>
        </div>
        {wish.message && (
          <div className="flex items-start space-x-2">
            <MessageCircle className="w-4 h-4 text-red-500 mt-1" />
            <p className="text-gray-600">{wish.message}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}