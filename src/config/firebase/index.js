import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCS133T_HiCBCTPFrcgJZTnQP3zKsu0rPE",
    authDomain: "simple-notes-firebase-86fec.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-86fec.firebaseio.com",
    projectId: "simple-notes-firebase-86fec",
    storageBucket: "simple-notes-firebase-86fec.appspot.com",
    messagingSenderId: "703676938730",
    appId: "1:703676938730:web:4e5ec690e8ff6f09f05a93",
    measurementId: "G-2T42SP0HRZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export const database = firebase.database();

  export default firebase;