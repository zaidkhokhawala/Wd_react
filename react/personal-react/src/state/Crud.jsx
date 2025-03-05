<<<<<<< HEAD

// step 1 : update ke liye 2 state lege ek me id store kareghe ek me editform ki value 
//const [editid, seteditid] = useState("")
//const [editformvalue, seteditformvalue] = useState({ name: "", city: "" })
//step 2 : hum ek button banayghe edit ka jisme onclick per=> edithandle(item.id) add kareghe 
//<td><button className='btn btn-danger' onClick={() => { edithandle(item.id) or bootstrap ka model open karwayghe edit click hone per 
// data-bs-toggle="modal" // Bootstrap modal ko open karega data-bs-target="#myModal" joform open karwana h uski id }}>delete</button></td>
//step 3 : aab jo editbtn per event diya h h uska => fun banayghe or uske parameter me (id) rakheghe jo edit btn me humne pass ki h 
//const edithandle = (id) => {} phir uske ander ek var banake id find kareghe data wale stat se kuch ese
// const matchid = data.find((item)=>{item.id === id})
//phir uske ander hi seteditformvalue(iske ander vo var ka name likheghe jisme id find ki h) likhe
//phir uske ander hi seteditid(id likheghe)id isliye q ki ye vahi id h jo match huai h jisse hum update karne wale h 
//step 4 :abb model form jo h usme name or value likheghe name="input ka name jese name,number or value" 
//value={editformvalue.name/number jo h wo value denghe} or onchange={editchangehandle} wala function bhi likheghe 
//step 5 :model form ke input me onchange={editchangehandle} liya h usko ()=>{} banayghe or phir
//  (e)=>{seteditformvalue({ ...editformvalue, [e.target.name]: e.target.value });} denghe 
//step 6 : model wale form tag ke ander onSubmit={editsubmitHandel} likheghe phir ()=>{} function banayhe 
//(e rakheghe)=>{iske ander sabse pehle e.preventDefault();isliye humne parameter me e liya phir 
//ek var me map( lenghe or uske ander (item denghe isme)=> loop 
//  { item.id === editid ? { ...item, ...editformvalue } : item} lenghe) 
// setdata(updatedata ye vo var ka name h jisme abhi condition chek kari h jisme update wali value aagyi h )
// seteditformvalue({ name: "", city: "" }) seteditid(""); edit wale dono ko blank kardenghe wapas }
//step 7 :model wale submit btn me data-bs-dismiss="modal" add kareghe  

import React, { useState } from 'react'

function Crud() {
  const [editid, seteditid] = useState(""); // ID store karne ke liye
  const [editformvalue, seteditformvalue] = useState({ name: "", city: "" }); // Edit karne ka data

const edithandle = (id) => {
 const matchid = data.find(item=>item.id === id)
 seteditformvalue(matchid)
 seteditid(id)
  }

  const editchangehandle = (e)=>{
    seteditformvalue({...editformvalue , [e.target.name]:e.target.value})
  }

const editsubmithandle = (e)=>{e.preventDefault()
  const newdata = data.map(item =>item.id===editid ? {...item , ...editformvalue}:item)
  setdata(newdata)
 seteditformvalue({ name: "", city: "" })
    seteditid("")
}

 // uper edit wala code h //
  //niche add or delete wala code he //

  const [inputvalue, setinputvalue] = useState({ name: "", city: "" })
  const [data, setdata] = useState([])
  const changehandle = (e) => {
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value })
  }
  const addhandle = () => {
    const newentry = { ...inputvalue, id: Date.now() }
    // console.log(newentry)
    setdata([...data, newentry])
    setinputvalue({ name: "", city: "" })
  }

  const deleteid = (id) => {
    const newdata = data.filter((item) => { return item.id !== id })
    setdata(newdata)
  }


  return (
    <div className="container mt-5">
      {/* Form Section */}
      <h3 className="text-center mb-4">Add Your Information</h3>
      <form
        className="row g-3 needs-validation"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={inputvalue.name}
            onChange={changehandle}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            value={inputvalue.city}
            onChange={changehandle}
            className="form-control"
          />
        </div>
        <div className="col-12 text-center">
          <button type="button" onClick={addhandle} className="btn btn-primary">
            Add
          </button>
        </div>
      </form>

      {/* Table Section */}
      <h3 className="text-center mt-5">User Data</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">delete</th>
            <th scope="col">edit</th>


          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td><button className='btn btn-danger' onClick={() => { deleteid(item.id) }}>delete</button></td>
              <td><button className='btn btn-primary' data-bs-toggle="modal" // Bootstrap modal ko open karega
                data-bs-target="#myModal" onClick={() => { edithandle(item.id) }}>edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*   model-start  */}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal body */}
            <div className="modal-body">
              <div className="col-sm-12 mb-2">
                <h2>Edit User</h2>
                <form action="" method="post" onSubmit={editsubmithandle} >
                  <div className="mb-3 mt-3">
                    <label >Name:</label>
                    <input type="text" required value={editformvalue.name} onChange={editchangehandle} className="form-control" placeholder="Enter Name" name="name" />
                  </div>
                  <div className="mb-3 mt-3">
                    <label>city:</label>
                    <input type="text" required value={editformvalue.city} onChange={editchangehandle} className="form-control" placeholder="Enter city" name="city" />
                  </div>
                  <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   model-end  */}
    </div>

  )
}

=======

// step 1 : update ke liye 2 state lege ek me id store kareghe ek me editform ki value 
//const [editid, seteditid] = useState("")
//const [editformvalue, seteditformvalue] = useState({ name: "", city: "" })
//step 2 : hum ek button banayghe edit ka jisme onclick per=> edithandle(item.id) add kareghe 
//<td><button className='btn btn-danger' onClick={() => { edithandle(item.id) or bootstrap ka model open karwayghe edit click hone per 
// data-bs-toggle="modal" // Bootstrap modal ko open karega data-bs-target="#myModal" joform open karwana h uski id }}>delete</button></td>
//step 3 : aab jo editbtn per event diya h h uska => fun banayghe or uske parameter me (id) rakheghe jo edit btn me humne pass ki h 
//const edithandle = (id) => {} phir uske ander ek var banake id find kareghe data wale stat se kuch ese
// const matchid = data.find((item)=>{item.id === id})
//phir uske ander hi seteditformvalue(iske ander vo var ka name likheghe jisme id find ki h) likhe
//phir uske ander hi seteditid(id likheghe)id isliye q ki ye vahi id h jo match huai h jisse hum update karne wale h 
//step 4 :abb model form jo h usme name or value likheghe name="input ka name jese name,number or value" 
//value={editformvalue.name/number jo h wo value denghe} or onchange={editchangehandle} wala function bhi likheghe 
//step 5 :model form ke input me onchange={editchangehandle} liya h usko ()=>{} banayghe or phir
//  (e)=>{seteditformvalue({ ...editformvalue, [e.target.name]: e.target.value });} denghe 
//step 6 : model wale form tag ke ander onSubmit={editsubmitHandel} likheghe phir ()=>{} function banayhe 
//(e rakheghe)=>{iske ander sabse pehle e.preventDefault();isliye humne parameter me e liya phir 
//ek var me map( lenghe or uske ander (item denghe isme)=> loop 
//  { item.id === editid ? { ...item, ...editformvalue } : item} lenghe) 
// setdata(updatedata ye vo var ka name h jisme abhi condition chek kari h jisme update wali value aagyi h )
// seteditformvalue({ name: "", city: "" }) seteditid(""); edit wale dono ko blank kardenghe wapas }
//step 7 :model wale submit btn me data-bs-dismiss="modal" add kareghe  

import React, { useState } from 'react'

function Crud() {
  const [editid, seteditid] = useState(""); // ID store karne ke liye
  const [editformvalue, seteditformvalue] = useState({ name: "", city: "" }); // Edit karne ka data

const edithandle = (id) => {
 const matchid = data.find(item=>item.id === id)
 seteditformvalue(matchid)
 seteditid(id)
  }

  const editchangehandle = (e)=>{
    seteditformvalue({...editformvalue , [e.target.name]:e.target.value})
  }

const editsubmithandle = (e)=>{e.preventDefault()
  const newdata = data.map(item =>item.id===editid ? {...item , ...editformvalue}:item)
  setdata(newdata)
 seteditformvalue({ name: "", city: "" })
    seteditid("")
}

 // uper edit wala code h //
  //niche add or delete wala code he //

  const [inputvalue, setinputvalue] = useState({ name: "", city: "" })
  const [data, setdata] = useState([])
  const changehandle = (e) => {
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value })
  }
  const addhandle = () => {
    const newentry = { ...inputvalue, id: Date.now() }
    // console.log(newentry)
    setdata([...data, newentry])
    setinputvalue({ name: "", city: "" })
  }

  const deleteid = (id) => {
    const newdata = data.filter((item) => { return item.id !== id })
    setdata(newdata)
  }


  return (
    <div className="container mt-5">
      {/* Form Section */}
      <h3 className="text-center mb-4">Add Your Information</h3>
      <form
        className="row g-3 needs-validation"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={inputvalue.name}
            onChange={changehandle}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            value={inputvalue.city}
            onChange={changehandle}
            className="form-control"
          />
        </div>
        <div className="col-12 text-center">
          <button type="button" onClick={addhandle} className="btn btn-primary">
            Add
          </button>
        </div>
      </form>

      {/* Table Section */}
      <h3 className="text-center mt-5">User Data</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">delete</th>
            <th scope="col">edit</th>


          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td><button className='btn btn-danger' onClick={() => { deleteid(item.id) }}>delete</button></td>
              <td><button className='btn btn-primary' data-bs-toggle="modal" // Bootstrap modal ko open karega
                data-bs-target="#myModal" onClick={() => { edithandle(item.id) }}>edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*   model-start  */}
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal body */}
            <div className="modal-body">
              <div className="col-sm-12 mb-2">
                <h2>Edit User</h2>
                <form action="" method="post" onSubmit={editsubmithandle} >
                  <div className="mb-3 mt-3">
                    <label >Name:</label>
                    <input type="text" required value={editformvalue.name} onChange={editchangehandle} className="form-control" placeholder="Enter Name" name="name" />
                  </div>
                  <div className="mb-3 mt-3">
                    <label>city:</label>
                    <input type="text" required value={editformvalue.city} onChange={editchangehandle} className="form-control" placeholder="Enter city" name="city" />
                  </div>
                  <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   model-end  */}
    </div>

  )
}

>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
export default Crud