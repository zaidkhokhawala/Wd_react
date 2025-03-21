import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About";

import Freelancer from "./pages/Freelancer";
import Contact from "./pages/Contact";
import Table from "./pages/Table";
import Form from "./pages/Form";
import Job from "./pages/Jobs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
    
        <Route path="/jobs" element={<Job />} />
        <Route path="/freelancer" element={<Freelancer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/table" element={<Table />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
