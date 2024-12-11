import { FirebaseApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore';
import { FirebaseStorage } from 'firebase/storage';

export interface FirebaseContext {
  app: FirebaseApp;
  db: Firestore;
  storage: FirebaseStorage;
}

export interface StorageError {
  code: string;
  message: string;
  name: string;
}