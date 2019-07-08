import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDJV1pTBuHb0uHLCpKE9Opk5XN_T0FFOEQ",
    authDomain: "ndroid-3ebd6.firebaseapp.com",
    databaseURL: "https://ndroid-3ebd6.firebaseio.com",
    projectId: "ndroid-3ebd6",
    storageBucket: "",
    messagingSenderId: "1094861657341",
    appId: "1:1094861657341:web:b32098212aaa451a"
};

firebase.initializeApp(firebaseConfig);

export const GAuth = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase