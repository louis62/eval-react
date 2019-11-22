import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZeVez9xumyl0t9L-QMBrtu6I3qRcMd4s",
  authDomain: "eval-lb-ecv.firebaseapp.com",
  databaseURL: "https://eval-lb-ecv.firebaseio.com",
  projectId: "eval-lb-ecv",
  storageBucket: "eval-lb-ecv.appspot.com",
  messagingSenderId: "139112170415",
  appId: "1:139112170415:web:47d49cf1a06ad568eea55a"
};

firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
const database = firebase.firestore();

export { auth, firebase, database };
