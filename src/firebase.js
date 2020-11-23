import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBFuMI0nxmGCjM4HIK3yFn33ojcDWinM3s",
  authDomain: "challenge-c074c.firebaseapp.com",
  databaseURL: "https://challenge-c074c.firebaseio.com",
  projectId: "challenge-c074c",
  storageBucket: "challenge-c074c.appspot.com",
  messagingSenderId: "1098226844806",
  appId: "1:1098226844806:web:841147dee9ab36865c7d07",
  measurementId: "G-FYJE6JGBGF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
