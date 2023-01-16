
import firebase from 'firebase/app'

// firebase.firestore.Timestamp.

const firebaseConfig = {
  apiKey: "AIzaSyCgkqfPvh47muosp88D4ZtONOHs-jQFGbA",
  authDomain: "futaleakdetector.firebaseapp.com",
  projectId: "futaleakdetector",
  storageBucket: "futaleakdetector.appspot.com",
  messagingSenderId: "79376123391",
  appId: "1:79376123391:web:041a286421d475d1b3d3ca",
};
const app = firebase.initializeApp(firebaseConfig);
// const Student = require("../models/student");
const firestore = firebase.firestore();