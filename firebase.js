// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDdrmH9o9uqqU7xOw6GtyC4NlSuy1ErZec',
  authDomain: 'authtask-cffdc.firebaseapp.com',
  projectId: 'authtask-cffdc',
  storageBucket: 'authtask-cffdc.appspot.com',
  messagingSenderId: '200547792467',
  appId: '1:200547792467:web:7d55d2141ce4e3edcff8a6',
  measurementId: 'G-GWHMD72TD6',
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
