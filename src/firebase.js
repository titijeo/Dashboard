import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "titi-8a7a5.firebaseapp.com",
  projectId: "titi-8a7a5",
  storageBucket: "titi-8a7a5.appspot.com",
  messagingSenderId: "290123337061",
  appId: "1:290123337061:web:55b591d736d53bd347e58c",
  measurementId: "G-FRFPDE24DG"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
