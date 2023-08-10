import { initializeApp, getApps } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZZl4oNiMLzaiRL8z9Pz_IMV-zpYFzR0I",

  authDomain: "plat-castroalves.firebaseapp.com",

  projectId: "plat-castroalves",

  storageBucket: "plat-castroalves.appspot.com",

  messagingSenderId: "683062146216",

  appId: "1:683062146216:web:7343626f48c2e753217e9d"

};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export default firebase_app;

const db = getFirestore(firebase_app);

export { db };