import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';
import {baseApi} from "../../utils/baseApi"
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { useDropzone } from 'react-dropzone'; // Import the dropzone hook

export default function VideoUpload() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [vimeoUrl, setVimeoUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null); // For storing the dropped video file
  const [videoError, setVideoError] = useState(''); // For any video file errors

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles[0]) {
      const file = acceptedFiles[0];
      if (file.type.startsWith('video/')) {
        setVideoFile(file);
        setVideoError('');
      } else {
        setVideoError('Please upload a valid video file.');
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'video/*', // Only accept video files
    maxSize: 10 * 1024 * 1024, // Max size 500MB
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    // Make sure video is dropped
    if (!videoFile) {
      setError('Please provide either a Vimeo URL or upload a video.');
      setSubmitting(false);
      return;
    }

    try {
    

     

      // Optionally, upload the file to a server (this is a placeholder API call)
      if (videoFile) {
        // Implement file upload to your API, e.g., using FormData
        const formData = new FormData();
        formData.append('name', name);
        formData.append("description",message)
        formData.append("video",videoFile)

        // Replace with your API endpoint for video file upload
        const res=await fetch(`${baseApi}upload`, {
          method: 'POST',
          body: formData,
        });
        console.log(res)
      }
   
      // Reset form after successful submission
      setName('');
      setMessage('');
      setVimeoUrl('');
      setVideoFile(null);
    } catch (err) {
      setError('Something went wrong. Please try again.');
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
            label=" Video /image URL"
            type="url"
            value={vimeoUrl}
            onChange={(e) => setVimeoUrl(e.target.value)}
            placeholder="Paste your Vimeo video / Image  URL"
            disabled={submitting}
            required={videoFile == null} // Only require if no file is uploaded
            error={error}
          />

          {/* Drag and drop area */}
          <div
            {...getRootProps()}
            className="border-2 border-dashed p-6 text-center cursor-pointer"
          >
            <input {...getInputProps()} />
            {videoFile ? (
              <div>
                <p>Video File: {videoFile.name}</p>
              </div>
            ) : (
              <p>Drag & drop a video file here, or click to select one</p>
            )}
            {videoError && <p className="text-red-500">{videoError}</p>}
          </div>

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
            <li>Upload your video/image by compressing it less than 8mb . (<a href="https://www.youcompress.com/" target="_blank" className='text-blue-700 underline'>link</a>)</li>
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
