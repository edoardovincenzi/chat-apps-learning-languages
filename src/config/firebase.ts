// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDR0p0rpHa87w4QA5sjO5KYMXuDH1caXfI',
//   authDomain: 'chat-for-learn-languages.firebaseapp.com',
//   projectId: 'chat-for-learn-languages',
//   storageBucket: 'chat-for-learn-languages.appspot.com',
//   messagingSenderId: '509906293977',
//   appId: '1:509906293977:web:d4843d4d08c12285609ac8',
//   measurementId: 'G-1XYQ2VZ8J7',
// };
const firebaseConfig = {
  apiKey: 'AIzaSyAAbYITX3asBs7zGQXTJLkl24KTPrAWyQM',
  authDomain: 'real-time-chat-63755.firebaseapp.com',
  projectId: 'real-time-chat-63755',
  storageBucket: 'real-time-chat-63755.appspot.com',
  messagingSenderId: '186666568404',
  appId: '1:186666568404:web:676bfcb26af4d13c640941',
  measurementId: 'G-XVDPEP8H67',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
