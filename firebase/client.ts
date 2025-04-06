// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWLkzWxtLgm704bQT06yVfrV6Uuh6RnwY",
  authDomain: "prepwise-50efd.firebaseapp.com",
  projectId: "prepwise-50efd",
  storageBucket: "prepwise-50efd.firebasestorage.app",
  messagingSenderId: "1002985424268",
  appId: "1:1002985424268:web:a04055a8eed3a843ff42a9",
  measurementId: "G-LXP29KZ1MQ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);