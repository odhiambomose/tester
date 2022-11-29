import firebase from "firebase/compat/app"

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAzeD4vAxUk6Z32btpXxODMZ9765Y_eZNA",
    authDomain: "otptest-6d798.firebaseapp.com",
    projectId: "otptest-6d798",
    storageBucket: "otptest-6d798.appspot.com",
    messagingSenderId: "527296258392",
    appId: "1:527296258392:web:f0858c50f4f4e07f08052d",
    measurementId: "G-8T9W8WQJ73"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



export { firebase };