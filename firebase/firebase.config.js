// Import the functions you need from the SDKs you need
import firebase from '@react-native-firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "",
    authDomain: "social-army-group.firebaseapp.com",
    projectId: "social-army-group",
    storageBucket: "social-army-group.appspot.com",
    messagingSenderId: "56386320797",
    appId: "1:56386320797:web:cdf86b9aac384a24551774",
    measurementId: "G-RRM2Z8GFKZ"
});

firebase.initializeApp(firebaseConfig);