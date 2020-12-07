import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwKjRdho2WwXFQusuw3-5s2wAyjf72V-I",
    authDomain: "challenge-6c0af.firebaseapp.com",
    projectId: "challenge-6c0af",
    storageBucket: "challenge-6c0af.appspot.com",
    messagingSenderId: "672408315087",
    appId: "1:672408315087:web:5eb8cec9d9934842d3c3ba",
    measurementId: "G-JLTWEYXHVB"
  };

// init app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// init db
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
