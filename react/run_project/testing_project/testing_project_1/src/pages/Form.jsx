import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Form() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", skills: "", experience: "", portfolio: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", phone: "", skills: "", experience: "", portfolio: "" });
  };

  return (
    <div>
      <div className="hero_area">
        <Navbar />
      </div>
      <div className="container p-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#030d47", minHeight: "80vh" }}>
        <div className="card shadow-lg p-4" style={{ width: "50rem", borderRadius: "30px", background: "linear-gradient(145deg, #e6e6e6, #ffffff)", boxShadow: "10px 10px 20px #bebebe, -10px -10px 20px #ffffff" }}>
          <h3 className="text-center mb-3">Freelancer Registration</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required style={{ borderRadius: "10px" }} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required style={{ borderRadius: "10px" }} />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required style={{ borderRadius: "10px" }} />
            </div>
            <div className="mb-3">
              <label className="form-label">Skills</label>
              <input type="text" className="form-control" name="skills" value={formData.skills} onChange={handleChange} placeholder="e.g., Web Development, Graphic Design" required style={{ borderRadius: "10px" }} />
            </div>
            <div className="mb-3">
              <label className="form-label">Experience (Years)</label>
              <input type="number" className="form-control" name="experience" value={formData.experience} onChange={handleChange} required style={{ borderRadius: "10px" }} />
            </div>
            <div className="mb-3">
              <label className="form-label">Portfolio Link</label>
              <input type="url" className="form-control" name="portfolio" value={formData.portfolio} onChange={handleChange} placeholder="https://yourportfolio.com" required style={{ borderRadius: "10px" }} />
            </div>
            <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#002147", borderRadius: "30px", boxShadow: "5px 5px 15px #bebebe, -5px -5px 15px #ffffff" }}>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Form;
