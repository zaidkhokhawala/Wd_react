import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider_section";
import Category from "../components/Category_section";
import About from "../components/About_section";

import Expert from "../components/Freelancer_section";
import Info from "../components/Info_section";

const Home = () => {
  return (
    <div><div class="hero_area">
      <Navbar />
      <Slider/></div>
      <Category />
      <About />

      <Expert />
      <Info />
      <Footer />
    </div>
  );
};

export default Home;
