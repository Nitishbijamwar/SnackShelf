import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
  update,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBaNt7p94uu0vrpcsfcQ9AuLe8RpmdFqNc",
  authDomain: "snackshelf-f5099.firebaseapp.com",
  projectId: "snackshelf-f5099",
  storageBucket: "snackshelf-f5099.firebasestorage.app",
  messagingSenderId: "1052056911638",
  appId: "1:1052056911638:web:67db61896c53717f5e1a37",
  measurementId: "G-BFQVS5BRL6",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db, ref, onValue, set, push, remove, update };
