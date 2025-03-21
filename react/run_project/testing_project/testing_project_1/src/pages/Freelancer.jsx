import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Freelancer_section from '../components/Freelancer_section';

function Freelancer() {
  return (
    < div>
    {/* Navbar ke liye wrapper div me className ka use karo */}
    <div className="hero_area">
      <Navbar />
    </div>
<Freelancer_section/>
    <Footer />
  </div>
  )
}

export default Freelancer









