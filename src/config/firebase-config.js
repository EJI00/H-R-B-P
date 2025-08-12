
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDexbqmHK7b1hoP9N-Tsal65I1U7VFjnqI",
  authDomain: "hotel-management-system-14e06.firebaseapp.com",
  projectId: "hotel-management-system-14e06",
  storageBucket: "hotel-management-system-14e06.appspot.com",
  messagingSenderId: "379350889090",
  appId: "1:379350889090:web:eb0726c8425fa115547a9b",
  measurementId: "G-WTY728EGSE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { db, auth, app };
