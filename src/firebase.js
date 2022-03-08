import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
// firebase config goes here...
};

const firbaseApp = firebase.initializeApp(firebaseConfig);
const db = firbaseApp.firestore();

export default db;