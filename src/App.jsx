import React, { useEffect, useState } from "react";
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
import Ceo from "./pages/Ceo";
import Partner from "./pages/Partner";
import Loader from "./components/Loader";

const App = () => {
    const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    // Option 1: Hide loader after a fixed time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // show loader for 2 seconds

    return () => clearTimeout(timer);

  }, []);

  return (
        <>
      {loading ? (<Loader />) : (
    <div>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Homepage />} />
        <Route path="/about" element = {<About />} />
        <Route path="/ourwork" element = {<OurWorkPage />} />
        <Route path="/ceo" element = {<Ceo />} />
        <Route path="/partner" element = {<Partner />} />
        <Route path="/gallery" element = {<Gallery />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/ntiac" element = {<NTIAC />} />
      </Routes>

      <Footer />
    </div>
      )}
    </>
  );
};

export default App;
