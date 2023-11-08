// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-WXzlkb8cu7nirIn5PFHgmSnm9JvmghM",
  authDomain: "offline-servce-provider-ass-11.firebaseapp.com",
  projectId: "offline-servce-provider-ass-11",
  storageBucket: "offline-servce-provider-ass-11.appspot.com",
  messagingSenderId: "29648152858",
  appId: "1:29648152858:web:5bf967e484113ccf91e4a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;