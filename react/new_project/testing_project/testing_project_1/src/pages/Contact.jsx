import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
<div>
    <div className="hero_area">
      <Navbar />
    </div>
    <div>  
  {/* Contact Section */}
  <section className="about_section layout_padding">
    <div className="container">
      <div className="row align-items-center">
        {/* Contact Form */}
        <div className="col-md-6">
          <div className="detail-box d-flex flex-column justify-content-center" style={{ height: "100%" }}>
            <div className="heading_container">
              <h2>Contact Us</h2>
            </div>
            <form style={{ background: "#f8f9fa", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn" style={{ backgroundColor: "#030d47", color: "#fff", width: "100%", padding: "10px", borderRadius: "50px" }}>
  Send Message
</button>         </form>
          </div>
        </div>
        {/* Contact Image */}
        <div className="col-md-6">
          <div className="img-box">
          <img src="images/about-img.jpg" alt="Customer support team" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />

          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Contact Section */}
</div>

    <Footer />
  </div>  )
}

export default Contact