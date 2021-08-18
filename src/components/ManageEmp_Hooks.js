import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import UpdateProfile from './UpdateProfile_Hooks'

function ManageEmp() {
  const [emplist, setEmpList] = useState([]);
  const [msg, setMessage] = useState("");
  const [status, setStatus] = useState(true);
  const [empemailid, setEmpEmailId] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('http://localhost:4500/emp')
      .then(response => {
        console.log(response.data)
        setEmpList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  function viewEmpList() {
    return emplist.map((currentrow, index) => {
      console.log(index)
      return (
        <tr key={index}>
          <td>{currentrow.empname}</td>
          <td>{currentrow.empemail}</td>
          <td>{currentrow.empmobile}</td>
          <td>{currentrow.empdob}</td>
          <td>{currentrow.empgender}</td>
          <td>{currentrow.empcountry}</td>
          <td>{currentrow.empaddress}</td>
          <td><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></td>
          <td><button onClick={() => updateRow(index)} className="btn btn-primary">Update</button></td>
        </tr>
      )
    })
  }

  function removeRow(index) {
    var tempemplist = [...emplist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempemplist.splice(index, 1);
    console.log(removerow[0].empemail)
    axios.delete('http://localhost:4500/emp/remove/' + removerow[0].empemail)
      .then(res => {
        console.log(res.data)
        setMessage('SUCCESSFULLY DELETED')
        setEmpList(tempemplist)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })
  }

  function updateRow(index) {
    var tempemplist = [...emplist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempemplist.splice(index, 1);
    console.log(removerow[0].empemail)
    setStatus(false)
    setEmpEmailId(removerow[0].empemail)
  }

  if (status === true) {
    return (
      <div>
        <NavigationBar />
        <br />
        <h3>EMPLOYEE DETAILS</h3>
        <b style={{ color: "red" }}>{msg}</b>
        <table border="1" align="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {viewEmpList()}
          </tbody>
        </table>
      </div>
    )
  }
  else {
    return (
      <div>
        <UpdateProfile email={empemailid} />
      </div>
    )
  }
}

export default ManageEmp
