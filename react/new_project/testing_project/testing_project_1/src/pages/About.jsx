import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About_section";


function AboutPage() {
  return (
    <div>
      {/* Navbar ke liye wrapper div me className ka use karo */}
      <div className="hero_area">
        <Navbar />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default AboutPage;
