import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVVOsAusT38l5uK1yHF-rSimc55pCeNjo",
  authDomain: "notepad-proj.firebaseapp.com",
  databaseURL: "https://notepad-proj-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "notepad-proj",
  storageBucket: "notepad-proj.appspot.com",
  messagingSenderId: "552583813387",
  appId: "1:552583813387:web:6d7c6aa6135483dad96a0e"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);