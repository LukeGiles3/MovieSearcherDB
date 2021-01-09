import {firebase} from '@firebase/app';

import '@firebase/auth'
import '@firebase/database'
import '@firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCPDgw92dHTlJKXX_BQVYGdyG-kPc6TKeE",
    authDomain: "moviesearcherdb.firebaseapp.com",
    projectId: "moviesearcherdb",
    storageBucket: "moviesearcherdb.appspot.com",
    messagingSenderId: "9986794453",
    appId: "1:9986794453:web:602bf637b779b0384fd35c"
  };
  firebase.initializeApp(firebaseConfig);


  export default firebase;