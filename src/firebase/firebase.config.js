import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDeHxTkrzE-L4aLttUcTCCLULI_ED_9QUo",
  authDomain: "coffeeandcode-12f19.firebaseapp.com",
  projectId: "coffeeandcode-12f19",
  storageBucket: "coffeeandcode-12f19.appspot.com",
  messagingSenderId: "1072894359389",
  appId: "1:1072894359389:web:fabb76b6e56238f7d45ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)