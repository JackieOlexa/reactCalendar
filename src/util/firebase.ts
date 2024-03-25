import { initializeApp } from 'firebase/app'
import { Firestore, doc, getDoc, getFirestore } from 'firebase/firestore/lite'
 
const firebaseConfig = {
  apiKey: "AIzaSyDMl26TDb3WJrEEA2tFH2Uod2-L9-uH_gI",
  authDomain: "jackies-first-test.firebaseapp.com",
  databaseURL: "https://jackies-first-test-default-rtdb.firebaseio.com",
  projectId: "jackies-first-test",
  storageBucket: "jackies-first-test.appspot.com",
  messagingSenderId: "502972278830",
  appId: "1:502972278830:web:607d2d455734d1c5b2d7bf"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);