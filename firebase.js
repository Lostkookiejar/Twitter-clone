// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2FC5WMwo88QyGDcXGjTXFxAX-1dmRu3k",
  authDomain: "twitter-app-ac5a6.firebaseapp.com",
  projectId: "twitter-app-ac5a6",
  storageBucket: "twitter-app-ac5a6.firebasestorage.app",
  messagingSenderId: "441773591937",
  appId: "1:441773591937:web:c831682633120213c5ec80",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
