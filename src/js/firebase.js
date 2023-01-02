// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUFn3Srt9HiN12waMtxkaG2Am28RY-uec",
  authDomain: "notes-ab72c.firebaseapp.com",
  projectId: "notes-ab72c",
  storageBucket: "notes-ab72c.appspot.com",
  messagingSenderId: "982634221338",
  appId: "1:982634221338:web:00f2e9f3c7f3d8564da6a3"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app);

export {
    db,
    auth
}