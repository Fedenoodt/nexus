import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBXTF2f_4EyKZsVJkaAgytkb1F0oMxKOns",
  authDomain: "bhsiai.firebaseapp.com",
  projectId: "bhsiai",
  storageBucket: "bhsiai.appspot.com",
  messagingSenderId: "166676658350",
  appId: "1:166676658350:web:ee06e3490412dcf6e0153f"
};

  
const app = initializeApp(firebaseConfig);
console.log('firebase:', app)
export default app;