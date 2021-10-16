import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAhXcHNOSPByJQ7r4zOuUGdaDscTP8MA4",
  authDomain: "clone-54b92.firebaseapp.com",
  projectId: "clone-54b92",
  storageBucket: "clone-54b92.appspot.com",
  messagingSenderId: "772443410577",
  appId: "1:772443410577:web:71f1f55f7bd62fff5caf30",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
