import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPx6l8JDNFfi70-DgRBvWk4mhuQz2kOWQ",
  authDomain: "preparatoriovirtualcomdelta.firebaseapp.com",
  projectId: "preparatoriovirtualcomdelta",
  storageBucket: "preparatoriovirtualcomdelta.appspot.com",
  messagingSenderId: "554101533814",
  appId: "1:554101533814:web:ed46583d92f4e14679c357"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
