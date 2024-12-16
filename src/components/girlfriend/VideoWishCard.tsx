import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import ReactPlayer from "react-player";
import type { VideoWish } from "../../types/video";

interface VideoWishCardProps {
  wish: VideoWish;
}

export default function VideoWishCard({ wish }: VideoWishCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="aspect-video relative">
        {/* ReactPlayer component */}
        <ReactPlayer
          url={wish.fileUrl || wish.url}
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
        </div>
          <div className="flex items-start space-x-2">
            <MessageCircle className="w-4 h-4 text-red-500 mt-1" />
            <p className="text-gray-600">
              {wish.description || "Many many happy returns of the day Jay"}
            </p>
          </div>
      </div>
    </motion.div>
  );
}
