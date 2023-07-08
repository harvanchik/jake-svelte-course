// import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCizo2VJ30mnvtdhD70WHY84xXkTKe81-o',
  authDomain: 'jake-svelte-course.firebaseapp.com',
  projectId: 'jake-svelte-course',
  storageBucket: 'jake-svelte-course.appspot.com',
  messagingSenderId: '676683314820',
  appId: '1:676683314820:web:38ba4b53dbb0cc1e8a74d1',
  measurementId: 'G-XSBHT3M6GY',
};

// initialize firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
