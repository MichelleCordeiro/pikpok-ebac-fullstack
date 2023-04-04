import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: 'AIzaSyDzyeD6iJKNMfr77cSw84XSLehyRe3uQ5M',
  authDomain: 'tiktok-clone-1ecba.firebaseapp.com',
  projectId: 'tiktok-clone-1ecba',
  storageBucket: 'tiktok-clone-1ecba.appspot.com',
  messagingSenderId: '417638921661',
  appId: '1:417638921661:web:aad92d1881415fab8b4ed4'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;