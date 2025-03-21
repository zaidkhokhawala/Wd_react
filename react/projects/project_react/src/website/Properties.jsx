
import React, { useState } from 'react';
import Navbar from '../Comman/Navbar';
import Footer from '../Comman/Footer';

function Properties() {
  const [activeFilter, setActiveFilter] = useState('*'); // Track active filter

  const properties = [
    {
      id: 1,
      category: 'adv',
      type: 'Luxury Villa',
      price: '$2,264,000',
      address: '18 Old Street Miami, OR 97219',
      bedrooms: 8,
      bathrooms: 8,
      area: '545m2',
      floor: 3,
      parking: '6 spots',
      image: 'assets/images/property-01.jpg',
    },
    {
      id: 2,
      category: 'str',
      type: 'Luxury Villa',
      price: '$1,180,000',
      address: '54 New Street Florida, OR 27001',
      bedrooms: 6,
      bathrooms: 5,
      area: '450m2',
      floor: 3,
      parking: '8 spots',
      image: 'assets/images/property-02.jpg',
    },
    {
      id: 3,
      category: 'adv rac',
      type: 'Luxury Villa',
      price: '$1,460,000',
      address: '26 Mid Street Portland, OR 38540',
      bedrooms: 5,
      bathrooms: 4,
      area: '225m2',
      floor: 3,
      parking: '10 spots',
      image: 'assets/images/property-03.jpg',
    },
    {
      id: 4,
      category: 'str',
      type: 'Apartment',
      price: '$584,500',
      address: '12 Hope Street Portland, OR 12650',
      bedrooms: 4,
      bathrooms: 3,
      area: '125m2',
      floor: '25th',
      parking: '2 cars',
      image: 'assets/images/property-04.jpg',
    },
    {
      id: 5,
      category: 'rac str',
      type: 'Penthouse',
      price: '$925,600',
      address: '34 Hope Street Portland, OR 42680',
      bedrooms: 4,
      bathrooms: 4,
      area: '180m2',
      floor: '38th',
      parking: '2 cars',
      image: 'assets/images/property-05.jpg',
    },
    {
      id: 6,
      category: 'rac adv',
      type: 'Modern Condo',
      price: '$450,000',
      address: '22 Hope Street Portland, OR 16540',
      bedrooms: 3,
      bathrooms: 2,
      area: '165m2',
      floor: '26th',
      parking: '3 cars',
      image: 'assets/images/property-06.jpg',
    },
    {
      id: 7,
      category: 'rac str',
      type: 'Luxury Villa',
      price: '$980,000',
      address: '14 Mid Street Miami, OR 36450',
      bedrooms: 8,
      bathrooms: 8,
      area: '550m2',
      floor: 3,
      parking: '12 spots',
      image: 'assets/images/property-03.jpg',
    },
    {
      id: 8,
      category: 'rac adv',
      type: 'Luxury Villa',
      price: '$1,520,000',
      address: '26 Old Street Miami, OR 12870',
      bedrooms: 12,
      bathrooms: 15,
      area: '380m2',
      floor: 3,
      parking: '14 spots',
      image: 'assets/images/property-02.jpg',
    },
    {
      id: 9,
      category: 'rac adv',
      type: 'Luxury Villa',
      price: '$3,145,000',
      address: '34 New Street Miami, OR 24650',
      bedrooms: 10,
      bathrooms: 12,
      area: '860m2',
      floor: 3,
      parking: '10 spots',
      image: 'assets/images/property-01.jpg',
    },
    {
      id: 10,
      category: 'adv',
      type: 'Modern Apartment',
      price: '$550,000',
      address: '45 Elm Street Miami, OR 65400',
      bedrooms: 3,
      bathrooms: 2,
      area: '200m2',
      floor: 5,
      parking: '1 car',
      image: 'assets/images/property-01.jpg',
    },
    {
      id: 11,
      category: 'str',
      type: 'Family Villa',
      price: '$990,000',
      address: '60 Maple Street Portland, OR 43210',
      bedrooms: 6,
      bathrooms: 4,
      area: '400m2',
      floor: 2,
      parking: '3 spots',
      image: 'assets/images/property-02.jpg',
    },
    {
      id: 12,
      category: 'rac',
      type: 'Penthouse',
      price: '$1,250,000',
      address: '78 Ocean Drive Miami, OR 33140',
      bedrooms: 5,
      bathrooms: 5,
      area: '300m2',
      floor: '45th',
      parking: '2 cars',
      image: 'assets/images/property-03.jpg',
    },
  ];

  // Filter logic to display properties based on the active filter
  const filteredProperties = activeFilter === '*'
    ? properties
    : properties.filter(property => property.category.includes(activeFilter));

  return (
    <div>
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <ul className="info">
                <li><i className="fa fa-envelope" /> info@company.com</li>
                <li><i className="fa fa-map" /> Sunny Isles Beach, FL 33160</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <ul className="social-links">
                <li><a href="#"><i className="fab fa-facebook" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <h1>Villa</h1>
                </a>
                <Navbar />
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb"><a href="#">Home</a> / Properties</span>
              <h3>Properties</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="section properties">
        <div className="container">
          <ul className="properties-filter">
            <li>
              <a className={activeFilter === '*' ? 'is_active' : ''} href="#!" onClick={() => setActiveFilter('*')}>Show All</a>
            </li>
            <li>
              <a className={activeFilter === 'adv' ? 'is_active' : ''} href="#!" onClick={() => setActiveFilter('adv')}>Apartment</a>
            </li>
            <li>
              <a className={activeFilter === 'str' ? 'is_active' : ''} href="#!" onClick={() => setActiveFilter('str')}>Villa House</a>
            </li>
            <li>
              <a className={activeFilter === 'rac' ? 'is_active' : ''} href="#!" onClick={() => setActiveFilter('rac')}>Penthouse</a>
            </li>
          </ul>

          <div className="row properties-box">
            {filteredProperties.map(property => (
              <div key={property.id} className={`col-lg-4 col-md-6 align-self-center mb-30 properties-items ${property.category}`}>
                <div className="item">
                  <a href="property-details.html"><img src={property.image} alt={property.type} /></a>
                  <span className="category">{property.type}</span>
                  <h6>{property.price}</h6>
                  <h4><a href="property-details.html">{property.address}</a></h4>
                  <ul>
                    <li>Bedrooms: <span>{property.bedrooms}</span></li>
                    <li>Bathrooms: <span>{property.bathrooms}</span></li>
                    <li>Area: <span>{property.area}</span></li>
                    <li>Floor: <span>{property.floor}</span></li>
                    <li>Parking: <span>{property.parking}</span></li>
                  </ul>
                  <div className="main-button">
                    <a href="property-details.html">Schedule a visit</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Properties;
