import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBgf2_5w7Yxo5pabJfQaRbhvBDHPMsoGRA",
    authDomain: "ecommerce-f72d8.firebaseapp.com",
    projectId: "ecommerce-f72d8",
    storageBucket: "ecommerce-f72d8.appspot.com",
    messagingSenderId: "872128510538",
    appId: "1:872128510538:web:c3a52f4937f175109404b3",
    measurementId: "G-SPJYF1XEXX"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
