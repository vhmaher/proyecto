import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD_O0DKZb6Sy075plxh9y24uAiln78rrLw",
    authDomain: "appvisitas-1b263.firebaseapp.com",
    projectId: "appvisitas-1b263",
    storageBucket: "appvisitas-1b263.appspot.com",
    messagingSenderId: "1017019075133",
    appId: "1:1017019075133:web:c2fe5c562ecd5fd360b854"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);