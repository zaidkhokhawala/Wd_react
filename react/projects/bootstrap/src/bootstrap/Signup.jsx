<<<<<<< HEAD
import React from 'react'

function Signup() {
  return (
<section className="signup-section" id="signup">
  <div className="container px-4 px-lg-5">
    <div className="row gx-4 gx-lg-5">
      <div className="col-md-10 col-lg-8 mx-auto text-center">
        <i className="far fa-paper-plane fa-2x mb-2 text-white" />
        <form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div className="row input-group-newsletter">
            <div className="col"><input className=" form-control" id="emailAddress" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" /></div>
            <div className="col-auto"><button className="btn btn-primary " id="submitButton" type="submit">Notify Me!</button></div>
          </div>
          <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email is required.</div>
          <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is not valid.</div>
          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center mb-3 mt-2 text-white">
              <div className="fw-bolder">Form submission successful!</div>
              To activate this form, sign up at
              <br />
              <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
            </div>
          </div>
          <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
        </form>
      </div>
    </div>
  </div>
</section>
 )
}

=======
import React from 'react'

function Signup() {
  return (
<section className="signup-section" id="signup">
  <div className="container px-4 px-lg-5">
    <div className="row gx-4 gx-lg-5">
      <div className="col-md-10 col-lg-8 mx-auto text-center">
        <i className="far fa-paper-plane fa-2x mb-2 text-white" />
        <form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div className="row input-group-newsletter">
            <div className="col"><input className=" form-control" id="emailAddress" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" /></div>
            <div className="col-auto"><button className="btn btn-primary " id="submitButton" type="submit">Notify Me!</button></div>
          </div>
          <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email is required.</div>
          <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is not valid.</div>
          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center mb-3 mt-2 text-white">
              <div className="fw-bolder">Form submission successful!</div>
              To activate this form, sign up at
              <br />
              <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
            </div>
          </div>
          <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
        </form>
      </div>
    </div>
  </div>
</section>
 )
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
export default Signup