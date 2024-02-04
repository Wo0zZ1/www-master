import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey:
        process.env.REACT_APP_FIREBASE_API_KEY ||
        'AIzaSyA1VPC-tU7BPolilrFIeAKL4nxWLT_aNWU',
    authDomain:
        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ||
        'myproject-2be3b.firebaseapp.com"',
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || 'myproject-2be3b',
    storageBucket:
        process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
        'myproject-2be3b.appspot.com',
    messagingSenderId:
        process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID || '304474234818',
    appId:
        process.env.REACT_APP_FIREBASE_APP_ID ||
        '1:304474234818:web:264ccc629f2ccee632405b',
};

const app = initializeApp(firebaseConfig);
export default app;
