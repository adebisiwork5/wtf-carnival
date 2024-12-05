
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA5ijsTAFvHYdh3OokM4iTZ9xh9Z4IfdY0",
  authDomain: "wtf-carnival.firebaseapp.com",
  projectId: "wtf-carnival",
  storageBucket: "wtf-carnival.firebasestorage.app",
  messagingSenderId: "672398149515",
  appId: "1:672398149515:web:97c919f99055e1a570518e",
  measurementId: "G-QLTRMNH1Y0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
