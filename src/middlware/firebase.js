import firebase from 'firebase/app';
import auth from 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = ({
  apiKey: 'AIzaSyD-sYAa8yJ2pIeM6IN7hyD0oHTNutCvoBY',
  authDomain: 'vuetify-rent.firebaseapp.com',
  databaseURL: 'https://vuetify-rent-default-rtdb.firebaseio.com',
  projectId: 'vuetify-rent',
  storageBucket: 'vuetify-rent.appspot.com',
  messagingSenderId: '641771873232',
  appId: '1:641771873232:web:45cc1a939d02ecec884fd5',
  measurementId: 'G-MKJ7Z7QLN0'
});
firebase.initializeApp(firebaseConfig);
export let firebaseAuth = firebase.auth()
export default {
  firebase,
  firebaseAuth

};
