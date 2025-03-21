<<<<<<< HEAD
import axios from 'axios';
import React, { useState } from 'react';

function Task1() {

    const [formdata, setformdata] = useState({ name: "", city: "" });
    const [data, setdata] = useState([]);
    const [editid, seteditid] = useState("");
    const [editformvalue, seteditformvalue] = useState({ name: "", city: "" });

    // Handle input change for adding new data
    const inputcng = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };

    // Handle form submission for adding new data
    const sub = () => {
        const addid = { ...formdata };

        // Send data to Firebase using .then() and .catch()
        axios.post('https://villa-agency-74-default-rtdb.firebaseio.com/users.json', addid)
            .then(response => {
                console.log("Data added successfully!");
                setdata([...data, { ...addid, id: response.data.name }]); // response.data.name is the Firebase-generated ID
                setformdata({ name: "", city: "" });
            })
            .catch(error => {
                console.error("Error adding data to Firebase:", error);
            });
    };

    // Handle delete action
    const del = (id) => {
        const deldata = data.filter((item) => item.id !== id);
        setdata(deldata);
    };

    // Fetch data for editing
    const editbtn = (id) => {
        axios.get(`https://villa-agency-74-default-rtdb.firebaseio.com/users/${id}.json`)
            .then(response => {
                seteditid(id);
                seteditformvalue(response.data); // Set the data in edit form
            })
            .catch(error => {
                console.error("Error fetching data for editing:", error);
            });
    };

    // Handle input change for editing data
    const editinputvalue = (e) => {
        seteditformvalue({ ...editformvalue, [e.target.name]: e.target.value });
    };

    // Handle form submission for editing data
    const editsubmit = (e) => {
        e.preventDefault();

        // Update data in Firebase using .then() and .catch()
        axios.put(`https://villa-agency-74-default-rtdb.firebaseio.com/users/${editid}.json`, editformvalue)
            .then(() => {
                console.log("Data updated successfully!");
                const updatedata = data.map((item) =>
                    item.id === editid ? { ...item, ...editformvalue } : item
                );
                setdata(updatedata);
                seteditid("");
                seteditformvalue({ name: "", city: "" });
            })
            .catch(error => {
                console.error("Error updating data in Firebase:", error);
            });
    };

    return (
        <div>
            <div className='container'>
                <form className='' onSubmit={e => e.preventDefault()}>
                    <div className="mb-3 mt-3 mr-5 ml-5">
                        <label className="form-label">Name :</label>
                        <input type="text" className="form-control" onChange={inputcng} value={formdata.name} placeholder="Enter name" name="name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">City :</label>
                        <input type="text" className="form-control" onChange={inputcng} value={formdata.city} placeholder="Enter city" name="city" />
                    </div>
                    <button type="submit" onClick={sub} className="btn btn-primary">Submit</button>
                </form>
            </div>

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
                <tbody>
                    {data.map((item) =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>
                                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editbtn(item.id)}>edit</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => del(item.id)}>delete</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>

            {/* Modal for Editing */}
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="col-sm-12 mb-2">
                                <h2>Edit User</h2>
                                <form onSubmit={editsubmit}>
                                    <div className="mb-3 mt-3">
                                        <label>Name:</label>
                                        <input type="text" required value={editformvalue.name || ""} onChange={editinputvalue} className="form-control" placeholder="Enter Name" name="name" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label>City:</label>
                                        <input type="text" value={editformvalue.city || ""} onChange={editinputvalue} required className="form-control" placeholder="Enter city" name="city" />
                                    </div>
                                    <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Modal */}
        </div>
    );
}

export default Task1;
=======
import axios from 'axios';
import React, { useState } from 'react';

function Task1() {

    const [formdata, setformdata] = useState({ name: "", city: "" });
    const [data, setdata] = useState([]);
    const [editid, seteditid] = useState("");
    const [editformvalue, seteditformvalue] = useState({ name: "", city: "" });

    // Handle input change for adding new data
    const inputcng = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };

    // Handle form submission for adding new data
    const sub = () => {
        const addid = { ...formdata };

        // Send data to Firebase using .then() and .catch()
        axios.post('https://villa-agency-74-default-rtdb.firebaseio.com/users.json', addid)
            .then(response => {
                console.log("Data added successfully!");
                setdata([...data, { ...addid, id: response.data.name }]); // response.data.name is the Firebase-generated ID
                setformdata({ name: "", city: "" });
            })
            .catch(error => {
                console.error("Error adding data to Firebase:", error);
            });
    };

    // Handle delete action
    const del = (id) => {
        const deldata = data.filter((item) => item.id !== id);
        setdata(deldata);
    };

    // Fetch data for editing
    const editbtn = (id) => {
        axios.get(`https://villa-agency-74-default-rtdb.firebaseio.com/users/${id}.json`)
            .then(response => {
                seteditid(id);
                seteditformvalue(response.data); // Set the data in edit form
            })
            .catch(error => {
                console.error("Error fetching data for editing:", error);
            });
    };

    // Handle input change for editing data
    const editinputvalue = (e) => {
        seteditformvalue({ ...editformvalue, [e.target.name]: e.target.value });
    };

    // Handle form submission for editing data
    const editsubmit = (e) => {
        e.preventDefault();

        // Update data in Firebase using .then() and .catch()
        axios.put(`https://villa-agency-74-default-rtdb.firebaseio.com/users/${editid}.json`, editformvalue)
            .then(() => {
                console.log("Data updated successfully!");
                const updatedata = data.map((item) =>
                    item.id === editid ? { ...item, ...editformvalue } : item
                );
                setdata(updatedata);
                seteditid("");
                seteditformvalue({ name: "", city: "" });
            })
            .catch(error => {
                console.error("Error updating data in Firebase:", error);
            });
    };

    return (
        <div>
            <div className='container'>
                <form className='' onSubmit={e => e.preventDefault()}>
                    <div className="mb-3 mt-3 mr-5 ml-5">
                        <label className="form-label">Name :</label>
                        <input type="text" className="form-control" onChange={inputcng} value={formdata.name} placeholder="Enter name" name="name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">City :</label>
                        <input type="text" className="form-control" onChange={inputcng} value={formdata.city} placeholder="Enter city" name="city" />
                    </div>
                    <button type="submit" onClick={sub} className="btn btn-primary">Submit</button>
                </form>
            </div>

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
                <tbody>
                    {data.map((item) =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>
                                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editbtn(item.id)}>edit</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => del(item.id)}>delete</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>

            {/* Modal for Editing */}
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="col-sm-12 mb-2">
                                <h2>Edit User</h2>
                                <form onSubmit={editsubmit}>
                                    <div className="mb-3 mt-3">
                                        <label>Name:</label>
                                        <input type="text" required value={editformvalue.name || ""} onChange={editinputvalue} className="form-control" placeholder="Enter Name" name="name" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label>City:</label>
                                        <input type="text" value={editformvalue.city || ""} onChange={editinputvalue} required className="form-control" placeholder="Enter city" name="city" />
                                    </div>
                                    <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Modal */}
        </div>
    );
}

export default Task1;
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06
