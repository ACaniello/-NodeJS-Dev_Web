// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw4Imfll4Dbdl7FgPslXTw-89dTkGGbgw",
  authDomain: "auladevweb-3e716.firebaseapp.com",
  projectId: "auladevweb-3e716",
  storageBucket: "auladevweb-3e716.appspot.com",
  messagingSenderId: "684367230278",
  appId: "1:684367230278:web:bda41372dd6fd8a31ea147",
  measurementId: "G-ZB0F24644F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);