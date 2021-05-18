import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV9iuaM9IQvEGtZ58F-mO6zUZHKft_Dnc",
  authDomain: "linked-clone-ee9b6.firebaseapp.com",
  projectId: "linked-clone-ee9b6",
  storageBucket: "linked-clone-ee9b6.appspot.com",
  messagingSenderId: "434439785195",
  appId: "1:434439785195:web:6f97517599a2e99ab2ccae",
  measurementId: "G-ENF6DB4WFH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
