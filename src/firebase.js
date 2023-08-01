import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDtyiQrBcX1vERercpiMQQundLVPibBqvg",
    authDomain: "clone-f1ed7.firebaseapp.com",
    projectId: "clone-f1ed7",
    storageBucket: "clone-f1ed7.appspot.com",
    messagingSenderId: "343435165971",
    appId: "1:343435165971:web:8c193640f58ab81a5b1ae6",
    measurementId: "G-9VRWED335R"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};