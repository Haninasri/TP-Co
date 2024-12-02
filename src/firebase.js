//import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore'
console.log("env",process.env)
const firebaseConfig = 
{
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL:"https://admin-773e7-default-rtdb.firebaseio.com/",
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};

export const app = firebase.initializeApp(firebaseConfig);
export const dbf = getDatabase(app);
//const analytics = getAnalytics(app);
export const fireStore = getFirestore(app);
export const db = firebase.firestore(app)
