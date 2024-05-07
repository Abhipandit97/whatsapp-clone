import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDxcB8jEeP9d91kEJV7ZiE1s-mQRQcn_GM",
  authDomain: "whats-app-1230a.firebaseapp.com",
  databaseURL: "https://whats-app-1230a-default-rtdb.firebaseio.com/",
  projectId: "whats-app-1230a",
  storageBucket: "whats-app-1230a.appspot.com",
  messagingSenderId: "368336900556",
  appId: "1:368336900556:web:fc4f0a844aed1d63fe4d69",
  measurementId: "G-DD2KK5PHEF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
