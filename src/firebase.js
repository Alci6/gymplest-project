import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDZ8c3WZyWrxdyoOObyAMz64g26tJW2ILE",
	authDomain: "gymplest.firebaseapp.com",
	projectId: "gymplest",
	storageBucket: "gymplest.appspot.com",
	messagingSenderId: "45577283385",
	appId: "1:45577283385:web:5587619418b3c4d9e3aae8",
	measurementId: "G-K6EFV18LNM",
};


firebase.initializeApp(firebaseConfig);
firebase.analytics(); 

export const db = firebase.firestore();
export const auth = firebase.auth;
