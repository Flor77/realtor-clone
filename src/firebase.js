// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnzCeDIPw3tfdANMeauZuDgXBWgi9O6Ng",
  authDomain: "realtor-clone-ef68d.firebaseapp.com",
  projectId: "realtor-clone-ef68d",
  storageBucket: "realtor-clone-ef68d.appspot.com",
  messagingSenderId: "642262441999",
  appId: "1:642262441999:web:94da84095779dab1b5837a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
