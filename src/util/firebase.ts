import { initializeApp } from 'firebase/app'
import { Firestore, doc, getDoc, getFirestore } from 'firebase/firestore/lite'
 
const firebaseConfig = {
  apiKey: 
  authDomain: "jackies-first-test.firebaseapp.com",
  databaseURL: "https://jackies-first-test-default-rtdb.firebaseio.com",
  projectId: "jackies-first-test",
  storageBucket: "jackies-first-test.appspot.com",
  messagingSenderId: "502972278830",
  appId: 
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
