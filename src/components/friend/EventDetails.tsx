import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Utensils, Gift } from 'lucide-react';

export default function EventDetails() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-pink-100 to-red-50 rounded-lg p-8 shadow-xl text-gray-800"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold font-handwriting">The Celebration</h2>
        <Gift className="w-8 h-8 text-red-500" />
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <Calendar className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Date</h3>
            <p className="text-gray-700">Monday, April 15th, 2024</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Time</h3>
            <p className="text-gray-700">6:00 PM onwards</p>
            <p className="text-sm text-gray-600">Dinner & Celebrations</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Venue</h3>
            <p className="text-gray-700">Crystal Garden Restaurant</p>
            <p className="text-sm text-gray-600">42 Paradise Avenue, Garden City</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Utensils className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">What to Expect</h3>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Welcome Drinks</li>
              <li>Dinner Buffet</li>
              <li>Music & Dancing</li>
              <li>Birthday Cake Ceremony</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-white bg-opacity-50 rounded-lg">
        <p className="text-center text-gray-700 font-handwriting text-lg">
          Your presence is the greatest gift we could ask for! ❤️
        </p>
      </div>
    </motion.div>
  );
}