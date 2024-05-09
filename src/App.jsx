import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import About from "./components/About";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
    </>
  );
}

export default App;
