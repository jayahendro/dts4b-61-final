import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5wSustqCqxlboi3TE0cJeJ1BmExgWXIs",
  authDomain: "react-test-6873f.firebaseapp.com",
  projectId: "react-test-6873f",
  storageBucket: "react-test-6873f.appspot.com",
  messagingSenderId: "54930151901",
  appId: "1:54930151901:web:2b513dc35f111fe1ebbe34",
  measurementId: "G-TKJC6VHTJM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);