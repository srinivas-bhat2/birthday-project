import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MemoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function MemoryCard({ icon: Icon, title, description }: MemoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-xl p-6"
    >
      <Icon className="w-8 h-8 text-red-500 mb-4" />
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}