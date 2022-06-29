import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4MAaLmv8J58LknsHlqqbt72_8v9ZKGEQ",

  authDomain: "exemplo-autenticacao-rea-f08ed.firebaseapp.com",

  projectId: "exemplo-autenticacao-rea-f08ed",

  storageBucket: "exemplo-autenticacao-rea-f08ed.appspot.com",

  messagingSenderId: "215978220529",

  appId: "1:215978220529:web:a46b1af514651836b68250",

  measurementId: "G-878JW6KG3S",
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
