import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TO BE REPLACED WITH USER'S ACTUAL CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyDkbJocVVGyssFruLOTGm9Ssqio30Zdu4c",
  authDomain: "devnexes-site.firebaseapp.com",
  projectId: "devnexes-site",
  storageBucket: "devnexes-site.firebasestorage.app",
  messagingSenderId: "300574724101",
  appId: "1:300574724101:web:895ecf28ccc17c54ad0c6c",
  measurementId: "G-W1RRR25RGE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
