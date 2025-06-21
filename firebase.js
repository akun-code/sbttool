// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA22ZEJ7D5IVjM7wbnXzfBrKzFMBmJVA4o",
  authDomain: "sbttool-c3db5.firebaseapp.com",
  projectId: "sbttool-c3db5",
  storageBucket: "sbttool-c3db5.firebasestorage.app",
  messagingSenderId: "775620476830",
  appId: "1:775620476830:web:8d7e528cd4d146ce29208f",
  measurementId: "G-1VTHFF4335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
