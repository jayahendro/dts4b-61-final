import "./App.css"
import {Layout} from "./components/Layout"
import {Box} from "@mui/material"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import DetailPage from "./pages/DetailPage"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import NewsDetailPage from "./pages/NewsDetailPage"
import NewsPage from "./pages/NewsPage"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5wSustqCqxlboi3TE0cJeJ1BmExgWXIs",
  authDomain: "react-test-6873f.firebaseapp.com",
  projectId: "react-test-6873f",
  storageBucket: "react-test-6873f.appspot.com",
  messagingSenderId: "54930151901",
  appId: "1:54930151901:web:2b513dc35f111fe1ebbe34",
  measurementId: "G-TKJC6VHTJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/detail/:detailId" element={<DetailPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/profile/:profileId" element={<ProfilePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/news/" element={<NewsPage />} />
          <Route path="/news/:tahun/:bulan/:tanggal/*" element={<NewsDetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
