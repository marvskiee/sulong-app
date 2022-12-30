import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYNIRVHwg22aSJGLQRBjsfV-BI3OiLBGQ",
  authDomain: "sulong-db7f2.firebaseapp.com",
  projectId: "sulong-db7f2",
  storageBucket: "sulong-db7f2.appspot.com",
  messagingSenderId: "1050668025787",
  appId: "1:1050668025787:web:3cc9e55100cda31262669e",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
