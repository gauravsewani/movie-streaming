import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD51SDB4tGFxRifdKISVJzKqkNG3E1YYUE",
  authDomain: "movie-streaming-303ba.firebaseapp.com",
  projectId: "movie-streaming-303ba",
  storageBucket: "movie-streaming-303ba.appspot.com",
  messagingSenderId: "673894143447",
  appId: "1:673894143447:web:1e9cadd6331ae4129e6792",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
