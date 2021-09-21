import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDXxqXjHQwWXXHoFylTFJe5chKROiD1BRs",
    authDomain: "crwn-db-b4bc2.firebaseapp.com",
    projectId: "crwn-db-b4bc2",
    storageBucket: "crwn-db-b4bc2.appspot.com",
    messagingSenderId: "283452666774",
    appId: "1:283452666774:web:6cd60454da2803958663b7"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const  SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;