import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXTF2f_4EyKZsVJkaAgytkb1F0oMxKOns",
  authDomain: "bhsiai.firebaseapp.com",
  projectId: "bhsiai",
  storageBucket: "bhsiai.appspot.com",
  messagingSenderId: "166676658350",
  appId: "1:166676658350:web:ee06e3490412dcf6e0153f"
};

  

firebase.initializeApp(firebaseConfig);
console.log('firebase:', firebase)
export default firebase;