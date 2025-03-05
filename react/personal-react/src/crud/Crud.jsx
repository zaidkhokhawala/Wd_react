<<<<<<< HEAD
import React, { useState } from 'react';

function Crud() {
  const [emptyForm, setEmptyForm] = useState([]);
  const [mainForm, setMainForm] = useState({
    Name: "",
    Subject: "",
    Comment: ""
  });
  
  const cHandel = (e) => {
    setMainForm({ ...mainForm, [e.target.name]: e.target.value });
    console.log(mainForm);
    };
  

  const formHandle = (e) => {
    e.preventDefault();
    setEmptyForm([...emptyForm, mainForm]);
    setMainForm({
      Name: "",
      Subject: "",
      Comment: ""
    });
  };

    
   

  return (
    <div>
      <form onSubmit={formHandle}>
        <div className="row">
          <div className="mt-3 col-6">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" value={mainForm.Name} onChange={cHandel}  className="form-control" placeholder="Enter Your Name" name="Name" />
          </div>
          <div className="mt-3 col-6">
            <label htmlFor="subject" className="form-label">Subject:</label>
            <input type="text" value={mainForm.Subject} onChange={cHandel}  className="form-control" placeholder="Enter Subject" name="Subject" />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="comment" className="form-label">Comment:</label>
            <input type="text" value={mainForm.Comment} onChange={cHandel}    className="form-control" placeholder="Enter Comment" name="Comment" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit...</button>
      </form>

      <div className="container-fluid mt-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {emptyForm.map((form, index) => (
              <tr key={index}>
                <td>{form.Name}</td>
                <td>{form.Subject}</td>
                <td>{form.Comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crud;
=======
import React, { useState } from 'react';

function Crud() {
  const [emptyForm, setEmptyForm] = useState([]);
  const [mainForm, setMainForm] = useState({
    Name: "",
    Subject: "",
    Comment: ""
  });
  
  const cHandel = (e) => {
    setMainForm({ ...mainForm, [e.target.name]: e.target.value });
    console.log(mainForm);
    };
  

  const formHandle = (e) => {
    e.preventDefault();
    setEmptyForm([...emptyForm, mainForm]);
    setMainForm({
      Name: "",
      Subject: "",
      Comment: ""
    });
  };

    
   

  return (
    <div>
      <form onSubmit={formHandle}>
        <div className="row">
          <div className="mt-3 col-6">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" value={mainForm.Name} onChange={cHandel}  className="form-control" placeholder="Enter Your Name" name="Name" />
          </div>
          <div className="mt-3 col-6">
            <label htmlFor="subject" className="form-label">Subject:</label>
            <input type="text" value={mainForm.Subject} onChange={cHandel}  className="form-control" placeholder="Enter Subject" name="Subject" />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="comment" className="form-label">Comment:</label>
            <input type="text" value={mainForm.Comment} onChange={cHandel}    className="form-control" placeholder="Enter Comment" name="Comment" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit...</button>
      </form>

      <div className="container-fluid mt-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {emptyForm.map((form, index) => (
              <tr key={index}>
                <td>{form.Name}</td>
                <td>{form.Subject}</td>
                <td>{form.Comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crud;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
