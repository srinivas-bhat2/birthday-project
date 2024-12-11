import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from '../lib/firebase';
import { getFirebaseErrorMessage } from '../utils/firebase-errors';

interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

export const useFirebaseUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const uploadFile = async (
    file: File,
    path: string,
    metadata?: { [key: string]: string }
  ): Promise<UploadResult> => {
    try {
      setUploading(true);
      setProgress(0);

      const storageRef = ref(storage, `${path}/${Date.now()}-${file.name}`);
      
      // Upload the file
      const snapshot = await uploadBytes(storageRef, file, {
        customMetadata: metadata,
      });

      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);

      setProgress(100);
      return { success: true, url: downloadURL };
    } catch (error: any) {
      const errorMessage = getFirebaseErrorMessage(error);
      return { success: false, error: errorMessage };
    } finally {
      setUploading(false);
    }
  };

  const addDocument = async (
    collectionName: string,
    data: any
  ): Promise<string | null> => {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        timestamp: Date.now(),
      });
      return docRef.id;
    } catch (error: any) {
      console.error('Error adding document:', error);
      return null;
    }
  };

  return {
    uploadFile,
    addDocument,
    uploading,
    progress,
  };
};