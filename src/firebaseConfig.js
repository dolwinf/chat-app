import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyC4dvS-WiQGpFMiuTAMLnTYff1gkExkVoc",
    authDomain: "slack-601a0.firebaseapp.com",
    projectId: "slack-601a0",
    storageBucket: "slack-601a0.appspot.com",
    messagingSenderId: "978646244993",
    appId: "1:978646244993:web:04ceefc51f042dca2a3780"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }