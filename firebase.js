// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClIlV4ySAZBrj5751RDganbBrIbJV09wo",
  authDomain: "fir-login-207a8.firebaseapp.com",
  projectId: "fir-login-207a8",
  storageBucket: "fir-login-207a8.appspot.com",
  messagingSenderId: "756339758439",
  appId: "1:756339758439:web:421ee71526c3b3d3a80bc2"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app =  firebase.app()
}
const auth = firebase.auth();
export {auth}; 