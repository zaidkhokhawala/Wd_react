import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Jobs() {
  return (
    <div>
    {/* Navbar ke liye wrapper div me className ka use karo */}
    <div className="hero_area">
      <Navbar />
    </div>
     {/* job section */}
<section className="job_section layout_padding">
  <div className="container">
    <div className="heading_container heading_center">
      <h2>
        RECENT &amp; FEATURED JOBS
      </h2>
    </div>
    <div className="job_container">
      <h4 className="job_heading">
        Featured Jobs
      </h4>
      <div className="row">
        <div className="col-lg-6">
          <div className="box">
            <div className="job_content-box">
              <div className="img-box">
                <img src="images/job_logo1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Development Team Lead
                </h5>
                <div className="detail-info">
                  <h6>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>
                      Washington. D.C.
                    </span>
                  </h6>
                  <h6>
                    <i className="fa fa-money" aria-hidden="true" />
                    <span>
                      $1200 - $1300
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="option-box">
              <button className="fav-btn">
                <i className="fa fa-heart-o" aria-hidden="true" />
              </button>
              <a href className="apply-btn">
                Apply Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="box">
            <div className="job_content-box">
              <div className="img-box">
                <img src="images/job_logo2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Make my website responsive device compatible
                </h5>
                <div className="detail-info">
                  <h6>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>
                      New York
                    </span>
                  </h6>
                  <h6>
                    <i className="fa fa-money" aria-hidden="true" />
                    <span>
                      $200 - $340
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="option-box">
              <button className="fav-btn">
                <i className="fa fa-heart-o" aria-hidden="true" />
              </button>
              <a href className="apply-btn">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="job_container">
      <h4 className="job_heading">
        Recent Jobs
      </h4>
      <div className="row">
        <div className="col-lg-6">
          <div className="box">
            <div className="job_content-box">
              <div className="img-box">
                <img src="images/job_logo3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Looking Graphic Designer (Logo + UI)
                </h5>
                <div className="detail-info">
                  <h6>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>
                      Washington. D.C.
                    </span>
                  </h6>
                  <h6>
                    <i className="fa fa-money" aria-hidden="true" />
                    <span>
                      $1200/mo
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="option-box">
              <button className="fav-btn">
                <i className="fa fa-heart-o" aria-hidden="true" />
              </button>
              <a href className="apply-btn">
                Apply Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="box">
            <div className="job_content-box">
              <div className="img-box">
                <img src="images/job_logo6.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Are you Typography Expert?
                </h5>
                <div className="detail-info">
                  <h6>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>
                      New York
                    </span>
                  </h6>
                  <h6>
                    <i className="fa fa-money" aria-hidden="true" />
                    <span>
                      $56 - $90
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="option-box">
              <button className="fav-btn">
                <i className="fa fa-heart-o" aria-hidden="true" />
              </button>
              <a href className="apply-btn">
                Apply Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="box">
            <div className="job_content-box">
              <div className="img-box">
                <img src="images/job_logo5.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Looking WordPress Developer for ThemeForest
                </h5>
                <div className="detail-info">
                  <h6>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>
                      Washington. D.C.
                    </span>
                  </h6>
                  <h6>
                    <i className="fa fa-money" aria-hidden="true" />
                    <span>
                      $400 - $540
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="option-box">
              <button className="fav-btn">
                <i className="fa fa-heart-o" aria-hidden="true" />
              </button>
              <a href className="apply-btn">
                Apply Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="box">
            <div className="job_content-box">
              <div className="img-box">
                <img src="images/job_logo4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Hiring Web Designer for Project
                </h5>
                <div className="detail-info">
                  <h6>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>
                      Washington. D.C.
                    </span>
                  </h6>
                  <h6>
                    <i className="fa fa-money" aria-hidden="true" />
                    <span>
                      $350 - $450
                    </span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="option-box">
              <button className="fav-btn">
                <i className="fa fa-heart-o" aria-hidden="true" />
              </button>
              <a href className="apply-btn">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="btn-box">
      <a href>
        View All
      </a>
    </div>
  </div>
</section>
{/* end job section */}

    <Footer />
  </div>
  )
}

export default Jobs