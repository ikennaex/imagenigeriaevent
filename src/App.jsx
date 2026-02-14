import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import OurWorkPage from "./pages/OurWorkPage";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery";
import NTIAC from "./pages/NTIAC";

const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Homepage />} />
        <Route path="/about" element = {<About />} />
        <Route path="/ourwork" element = {<OurWorkPage />} />
        <Route path="/gallery" element = {<Gallery />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/ntiac" element = {<NTIAC />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
