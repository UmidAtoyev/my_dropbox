import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore, serverTimestamp, collection } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAJOwrO_5-KM0ZuiN2PPDUf90BCf0rTm3U",
  authDomain: "dropbox-vue.firebaseapp.com",
  projectId: "dropbox-vue",
  storageBucket: "dropbox-vue.appspot.com",
  messagingSenderId: "82513253671",
  appId: "1:82513253671:web:65bbc630887695f2e0c502",
  measurementId: "G-RMMF7V0C8N"

  // apiKey: "AIzaSyAEsI6mDfKI-8pLl_pxAuDRPLc_qihUKHc",
  // authDomain: "mydropbox-3f448.firebaseapp.com",
  // projectId: "mydropbox-3f448",
  // storageBucket: "mydropbox-3f448.appspot.com",
  // messagingSenderId: "407671079910",
  // appId: "1:407671079910:web:c7ed4b9b8008c89643cc27"
});

const fs = getFirestore(firebaseApp);

export const db = {
  folders: collection(fs, 'folders'),
  files: collection(fs, 'files'),
  createdAt: serverTimestamp,
  formatDoc: doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  }
}

export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export { firebaseApp };