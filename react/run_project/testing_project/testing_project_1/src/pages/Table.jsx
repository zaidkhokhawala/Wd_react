import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Table() {
  const freelancers = [
    { name: "John Doe", email: "john@example.com", phone: "123-456-7890", skills: "Web Development", experience: "5", portfolio: "https://johndoe.com" },
    { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", skills: "Graphic Design", experience: "3", portfolio: "https://janesmith.com" },
    { name: "Alex Johnson", email: "alex@example.com", phone: "456-789-0123", skills: "SEO", experience: "4", portfolio: "https://alexjohnson.com" },
    { name: "Emily Brown", email: "emily@example.com", phone: "111-222-3333", skills: "Content Writing", experience: "2", portfolio: "https://emilybrown.com" },
    { name: "Michael Lee", email: "michael@example.com", phone: "222-333-4444", skills: "App Development", experience: "6", portfolio: "https://michaellee.com" },
    { name: "Sarah Wilson", email: "sarah@example.com", phone: "333-444-5555", skills: "UI/UX Design", experience: "3", portfolio: "https://sarahwilson.com" },
    { name: "David Martinez", email: "david@example.com", phone: "444-555-6666", skills: "Digital Marketing", experience: "5", portfolio: "https://davidmartinez.com" },
    { name: "Sophia Taylor", email: "sophia@example.com", phone: "555-666-7777", skills: "Video Editing", experience: "4", portfolio: "https://sophiataylor.com" },
    { name: "James Anderson", email: "james@example.com", phone: "666-777-8888", skills: "Photography", experience: "7", portfolio: "https://jamesanderson.com" },
    { name: "Olivia White", email: "olivia@example.com", phone: "777-888-9999", skills: "Copywriting", experience: "3", portfolio: "https://oliviawhite.com" }
  ];

  return (
    <div style={{ }}>
      <div className="hero_area">
        <Navbar />
      </div>
      <div className="container p-4 shadow-lg rounded" style={{ backgroundColor: "#030d47", minHeight: "100vh", padding: "20px", Color: "white", borderRadius: "15px",  border: "5px solid #030d47" }}>
        <h3 className="text-center text-white mb-4">Freelancers List</h3>
        <div className="table-responsive">
          <table className="table table-hover shadow-lg" style={{ borderRadius: "15px", overflow: "hidden", border: "2px solid #030d47" }}>
            <thead className="bg-primary text-light text-center">
              <tr>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Skills</th>
                <th scope="col">Experience (Years)</th>
                <th scope="col">Portfolio</th>
              </tr>
            </thead>
            <tbody>
              {freelancers.map((freelancer, index) => (
                <tr key={index} className="table-light text-center" style={{ transition: "0.3s", cursor: "pointer", borderBottom: "2px solid #030d47" }}>
                  <td>{freelancer.name}</td>
                  <td>{freelancer.email}</td>
                  <td>{freelancer.phone}</td>
                  <td>{freelancer.skills}</td>
                  <td>{freelancer.experience}</td>
                  <td><a href={freelancer.portfolio} target="_blank" rel="noopener noreferrer">View Portfolio</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Table;