import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCOh2Uqz6IyYFjkcekz_r1tqC0LwTs7XaE',
  authDomain: 'whatsapp-iamsuyash.firebaseapp.com',
  projectId: 'whatsapp-iamsuyash',
  storageBucket: 'whatsapp-iamsuyash.appspot.com',
  messagingSenderId: '1051151883260',
  appId: '1:1051151883260:web:e52fd00e34bbf037a3f079',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
