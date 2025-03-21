
import React, { useState } from 'react';
import Admheader from '../components/AdminHeader';
import Admfooter from '../components/AdminFooter';

import axios from 'axios';

function Add_products() {
  const [formvalue, setFormvalue] = useState({
   
    product_price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    floor: "",
    parking: ""
  });

  const changeHandel = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value
    });
    console.log(formvalue);
  };

  function validation() {
    let result = true;
    const { product_name, product_img, product_price, bedrooms, bathrooms, area, floor, parking } = formvalue;


    return result;
  }

  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      await axios.post(`http://localhost:3000/products`, formvalue);

      setFormvalue({
        ...formvalue,
        product_name: "",
        product_img: "",
        product_price: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        floor: "",
        parking: ""
      });
    }
  };

  return (
    <div>
      <Admheader />
      <div className="breadcrumbs overlay">
        <div className="container">
          <div className="bread-inner">
            <div className="row">
              <div className="col-12">
                <h2>Add Product</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Product Card Section */}
      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-us-form">
                  <h2>Add Product</h2>
                  <form className="form" onSubmit={submitHandel}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="product_name"
                            onChange={changeHandel}
                            value={formvalue.product_name}
                            placeholder="Product Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="url"
                            name="product_img"
                            onChange={changeHandel}
                            value={formvalue.product_img}
                            placeholder="Product Image URL"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="number"
                            name="product_price"
                            onChange={changeHandel}
                            value={formvalue.product_price}
                            placeholder="Product Price"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="bedrooms"
                            onChange={changeHandel}
                            value={formvalue.bedrooms}
                            placeholder="Bedrooms"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="bathrooms"
                            onChange={changeHandel}
                            value={formvalue.bathrooms}
                            placeholder="Bathrooms"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="area"
                            onChange={changeHandel}
                            value={formvalue.area}
                            placeholder="Area (e.g., 545m²)"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="floor"
                            onChange={changeHandel}
                            value={formvalue.floor}
                            placeholder="Floor"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="parking"
                            onChange={changeHandel}
                            value={formvalue.parking}
                            placeholder="Parking Spots"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group login-btn">
                          <button className="btn" type="submit">Add Product</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Display Card */}
            <div className="item mt-5">
              <a href="#">
                <img src={formvalue.product_img || "assets/images/placeholder.jpg"} alt="Product" />
              </a>
              <span className="category">Category: {formvalue.product_name || "Luxury Villa"}</span>
              <h6>${formvalue.product_price || "0.00"}</h6>
              <h4>
                <a href="#">{formvalue.product_name || "Product Name"}</a>
              </h4>
              <ul>
                <li>Bedrooms: <span>{formvalue.bedrooms || "0"}</span></li>
                <li>Bathrooms: <span>{formvalue.bathrooms || "0"}</span></li>
                <li>Area: <span>{formvalue.area || "0m²"}</span></li>
                <li>Floor: <span>{formvalue.floor || "0"}</span></li>
                <li>Parking: <span>{formvalue.parking || "0 spots"}</span></li>
              </ul>
              <div className="main-button">
                <a href="#">Schedule a visit</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Admfooter />
    </div>
  );
}

export default Add_products;
