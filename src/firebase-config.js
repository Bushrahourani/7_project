import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCAVIIjZnxQs4Au8vO4YNCRNM1JYdbOyNU",
    authDomain: "webproject-80cc0.firebaseapp.com",
    projectId: "webproject-80cc0",
    storageBucket: "webproject-80cc0.appspot.com",
    messagingSenderId: "909083655900",
    appId: "1:909083655900:web:e8d02dbd390311db21fe19"
  };
  const app = initializeApp(firebaseConfig);
  export const db =getFirestore(app);