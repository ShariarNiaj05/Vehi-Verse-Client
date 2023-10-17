// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.BASE_apiKey,
  authDomain: import.meta.env.BASE_authDomain,
  projectId: import.meta.env.BASE_projectId,
  storageBucket: import.meta.env.BASE_storageBucket,
  messagingSenderId: import.meta.env.BASE_messagingSenderId,
  appId: import.meta.env.BASE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
