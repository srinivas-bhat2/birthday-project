import { useState, useEffect } from 'react';
import type { VideoWish } from '../types/video';
import { baseApi } from '../utils/baseApi';



export function useVideoWishes() {
  const [wishes, setWishes] = useState<VideoWish[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseApi}getDetails`);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data:any = await response?.json();
        setWishes(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchWishes();
  }, []);

  return { wishes, loading, error };
}
