import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBKNXLNN6PdbqmKD-PSgXpHHhojEMkkc78",
    authDomain: "netflix-clone-build-4153b.firebaseapp.com",
    projectId: "netflix-clone-build-4153b",
    storageBucket: "netflix-clone-build-4153b.appspot.com",
    messagingSenderId: "92818939610",
    appId: "1:92818939610:web:0aed81d9354554577c4fe3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;