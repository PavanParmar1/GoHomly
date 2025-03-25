import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';

let app;
let auth;
let database;
let store;

export default async function initialiseFirebase() {
  if (!app) {
    const firebaseConfig = {
      apiKey: 'AIzaSyCiLbTrXg8xIbtNR9_Dj91tdo8GcRnQGIQ',
      authDomain: 'hapa-9d1da.firebaseapp.com',
      databaseURL:
        'https://hapa-9d1da-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'hapa-9d1da',
      storageBucket: 'hapa-9d1da.appspot.com',
      messagingSenderId: '958096829396',
      appId: '1:958096829396:web:5b007055ba149e82bd0441',
      measurementId: 'G-RJHC1TFHWG',
    };
    app = initializeApp(firebaseConfig);
    auth = getAuth();
    database = getDatabase(app);
    store = getFirestore(app);
  }
}
export {app, auth, database, store};
