// import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { writable } from 'svelte/store';

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

/**
 * @returns a store with the current firebase user
 */
function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();