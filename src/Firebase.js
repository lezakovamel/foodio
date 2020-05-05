import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBYqfNLNSSRHRrWmrGhqNUdDfKgmaUb5nY",
  authDomain: "foodio-b2214.firebaseapp.com",
  databaseURL: "https://foodio-b2214.firebaseio.com",
  projectId: "foodio-b2214",
  storageBucket: "foodio-b2214.appspot.com",
  messagingSenderId: "388047154196",
  appId: "1:388047154196:web:71bd1441e970c915398b01",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
