import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey:
        process.env.REACT_APP_FIREBASE_API_KEY ||
        'AIzaSyA97_6iwrP1HgeUkhuz22vuPmVblQxiwFQ',
    authDomain:
        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ||
        'master-2543c.firebaseapp.com',
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || 'master-2543c',
    storageBucket:
        process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
        'master-2543c.appspot.com',
    messagingSenderId:
        process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID || '1016907969498',
    appId:
        process.env.REACT_APP_FIREBASE_APP_ID ||
        '1:1016907969498:web:fa2535660cd32b74a406e3',
};
const app = initializeApp(firebaseConfig);
