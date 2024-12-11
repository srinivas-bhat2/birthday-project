import React from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import EventDetails from './friend/EventDetails';
import VideoUpload from './friend/VideoUpload';
import CountdownTimer from './shared/CountdownTimer';

export default function FriendDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-800 font-handwriting">
            You're Invited! 🎉
          </h1>
          <p className="text-xl text-gray-600">
            Join us in celebrating Jay's birthday
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <EventDetails />
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-pink-100 to-red-50 rounded-lg p-8 shadow-xl"
          >
            <Clock className="w-8 h-8 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-gray-800 font-handwriting">
              Countdown to the Big Day
            </h2>
            <CountdownTimer />
          </motion.div>
        </div>

        <VideoUpload />
      </div>
    </div>
  );
}