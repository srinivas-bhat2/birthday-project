import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { VideoWish } from '../types/video';

export function useVideoWishes() {
  const [wishes, setWishes] = useState<VideoWish[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const wishesRef = collection(db, 'wishes');
    const q = query(wishesRef, orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const wishesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as VideoWish[];
      
      setWishes(wishesData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { wishes, loading };
}