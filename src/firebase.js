// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQjYVsfrA2XDUcXjiW4n_o9T7Avu_7u0I" ,
  authDomain: process.env.REACT_AUTH_DOMAIN,
  projectId: process.env.REACT_PROJECT_ID,
  storageBucket:process.env.REACT_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID, 
  appId: process.env.REACT_API_ID
};
// REACT_API_KEY= "AIzaSyDFKQTnQoJrAV6-pbE7Yhq07cnzcQl100M"
//   REACT_AUTH_DOMAIN= "netflix-react-app-97b37.firebaseapp.com"
//   REACT_PROJECT_ID= "netflix-react-app-97b37"    
//   REACT_STORAGE_BUCKET= "netflix-react-app-97b37.appspot.com"
//   REACT_MESSAGING_SENDER_ID = "1023751154262"
//   REACT_API_ID= "1:1023751154262:web:1ead508fc5218a542829f7"
// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db= getFirestore(app)