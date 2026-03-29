import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPx6l8JDNFfi70-DgRBvWk4mhuQz2kOWQ",
  authDomain: "preparatoriovirtualcomdelta.firebaseapp.com",
  projectId: "preparatoriovirtualcomdelta",
  storageBucket: "preparatoriovirtualcomdelta.firebasestorage.app",
  messagingSenderId: "554101533814",
  appId: "1:554101533814:web:ed46583d92f4e14679c357"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
