import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';
import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';

export default function VideoUpload() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [vimeoUrl, setVimeoUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const extractVimeoId = (url: string) => {
    const regExp = /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const vimeoId = extractVimeoId(vimeoUrl);
    if (!vimeoId) {
      setError('Please enter a valid Vimeo video URL');
      return;
    }

    setSubmitting(true);
    try {
      await addDoc(collection(db, 'wishes'), {
        name,
        message,
        vimeoId,
        timestamp: Date.now(),
      });
      
      setName('');
      setMessage('');
      setVimeoUrl('');
      alert('Your wish has been added successfully!');
    } catch (error) {
      console.error('Error adding wish:', error);
      setError('Failed to add your wish. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center gap-3 mb-8">
          <Video className="w-8 h-8 text-red-500" />
          <h2 className="text-3xl font-bold">Share Your Video Wish</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            disabled={submitting}
            required
          />

          <Input
            label="Vimeo Video URL"
            type="url"
            value={vimeoUrl}
            onChange={(e) => setVimeoUrl(e.target.value)}
            placeholder="Paste your Vimeo video URL"
            disabled={submitting}
            required
            error={error}
          />

          <Textarea
            label="Message (Optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Add a message with your video"
            disabled={submitting}
          />

          <Button type="submit" isLoading={submitting}>
            Submit Your Wish
          </Button>
        </form>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">How to share your video:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
            <li>Record your birthday wish video</li>
            <li>Create a free Vimeo account at vimeo.com</li>
            <li>Upload your video to Vimeo (up to 500MB per week)</li>
            <li>Set the video privacy to "Anyone with the link"</li>
            <li>Copy the video URL and paste it above</li>
            <li>Fill in your name and optional message</li>
            <li>Submit your wish!</li>
          </ol>
        </div>
      </div>
    </motion.div>
  );
}