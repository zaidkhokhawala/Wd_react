<<<<<<< HEAD
import React, { useState } from 'react'

function Task() {
  const [formdata, setformdata] = useState({ name: "", city: "" })
  const [data, setdata] = useState([])
  const changehandle = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const adddata = () => {
    const iddata = { ...formdata, id: Date.now() }
    setdata([...data, iddata])
    setformdata({ name: "", city: "" })}

    const deleteid = (id) => {
      const newdata = data.filter((item) => { return item.id !== id })
      setdata(newdata)
    }
    
  const [editid, seteditid] = useState("")
  const [editvalue, seteditvalue] = useState({name:"", city:""})

    const editbtnhandle=(id)=>{
      const matchid = data.find((item)=>{return item.id === id})
seteditvalue(matchid)
seteditid(id)
    }
    const edithandle =(e)=>{
      seteditvalue({...editvalue,[e.target.name]:e.target.value})
    }

    const editformsubmit=(e)=>{ e.preventDefault()
      const neweditdata = data.map((item)=>item.id===editid?{...item,...editvalue}:item)
      setdata(neweditdata)
      seteditid("")
     seteditvalue({name:"", city:""})
    }



  







  return (
    <div>
      <div className='container ' >
        <form className='' onSubmit={(e) => { e.preventDefault() }}>
          <div className="mb-3 mt-3 mr-5 ml-5">
            <label className="form-label">Name :</label>
            <input type="text" className="form-control" onChange={changehandle} placeholder="Enter name" name="name" value={formdata.name} />
          </div>
          <div className="mb-3">
            <label className="form-label">City :</label>
            <input type="text" className="form-control" onChange={changehandle} placeholder="Enter city" name="city" value={formdata.city} />
          </div>
          <button type="submit" onClick={adddata} className="btn btn-primary">Submit</button>
        </form></div>
        <br />
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">city</th>
            <th scope="col">edit</th>
            <th scope="col">delete</th>

          </tr>
        </thead>
        <tbody>{data.map((item) =>
         <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td> 
         <td>{item.city}</td>
          <td><button className='btn btn-danger'  data-bs-toggle="modal"  data-bs-target="#myModal"  onClick={() => { editbtnhandle(item.id) }} >edit</button></td>
          <td><button className='btn btn-primary' onClick={() => { deleteid(item.id) }} >delete</button></td>
        </tr>)}

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
                <form action="" method="post"  onSubmit={editformsubmit}>
                  <div className="mb-3 mt-3">
                    <label >Name:</label>
                    <input type="text" required onChange={edithandle} value={editvalue.name || ""}  className="form-control" placeholder="Enter Name" name="name" />
                  </div>
                  <div className="mb-3 mt-3">
                    <label>city:</label>
                    <input type="text" onChange={edithandle} required value={editvalue.city || ""} className="form-control" placeholder="Enter city" name="city" />
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
import React, { useState } from 'react'

function Task() {
  const [formdata, setformdata] = useState({ name: "", city: "" })
  const [data, setdata] = useState([])
  const changehandle = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const adddata = () => {
    const iddata = { ...formdata, id: Date.now() }
    setdata([...data, iddata])
    setformdata({ name: "", city: "" })}

    const deleteid = (id) => {
      const newdata = data.filter((item) => { return item.id !== id })
      setdata(newdata)
    }
    
  const [editid, seteditid] = useState("")
  const [editvalue, seteditvalue] = useState({name:"", city:""})

    const editbtnhandle=(id)=>{
      const matchid = data.find((item)=>{return item.id === id})
seteditvalue(matchid)
seteditid(id)
    }
    const edithandle =(e)=>{
      seteditvalue({...editvalue,[e.target.name]:e.target.value})
    }

    const editformsubmit=(e)=>{ e.preventDefault()
      const neweditdata = data.map((item)=>item.id===editid?{...item,...editvalue}:item)
      setdata(neweditdata)
      seteditid("")
     seteditvalue({name:"", city:""})
    }



  







  return (
    <div>
      <div className='container ' >
        <form className='' onSubmit={(e) => { e.preventDefault() }}>
          <div className="mb-3 mt-3 mr-5 ml-5">
            <label className="form-label">Name :</label>
            <input type="text" className="form-control" onChange={changehandle} placeholder="Enter name" name="name" value={formdata.name} />
          </div>
          <div className="mb-3">
            <label className="form-label">City :</label>
            <input type="text" className="form-control" onChange={changehandle} placeholder="Enter city" name="city" value={formdata.city} />
          </div>
          <button type="submit" onClick={adddata} className="btn btn-primary">Submit</button>
        </form></div>
        <br />
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">city</th>
            <th scope="col">edit</th>
            <th scope="col">delete</th>

          </tr>
        </thead>
        <tbody>{data.map((item) =>
         <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td> 
         <td>{item.city}</td>
          <td><button className='btn btn-danger'  data-bs-toggle="modal"  data-bs-target="#myModal"  onClick={() => { editbtnhandle(item.id) }} >edit</button></td>
          <td><button className='btn btn-primary' onClick={() => { deleteid(item.id) }} >delete</button></td>
        </tr>)}

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
                <form action="" method="post"  onSubmit={editformsubmit}>
                  <div className="mb-3 mt-3">
                    <label >Name:</label>
                    <input type="text" required onChange={edithandle} value={editvalue.name || ""}  className="form-control" placeholder="Enter Name" name="name" />
                  </div>
                  <div className="mb-3 mt-3">
                    <label>city:</label>
                    <input type="text" onChange={edithandle} required value={editvalue.city || ""} className="form-control" placeholder="Enter city" name="city" />
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
export default Task