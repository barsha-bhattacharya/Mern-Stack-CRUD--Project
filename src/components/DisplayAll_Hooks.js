import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';

function DisplayAll() {
  const [emplist, setEmpList] = useState([]);

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
      return (
        <tr key={index}>
          <td>{currentrow.empname}</td>
          <td>{currentrow.empemail}</td>
          <td>{currentrow.empmobile}</td>
          <td>{currentrow.empdob}</td>
          <td>{currentrow.empgender}</td>
          <td>{currentrow.empcountry}</td>
          <td>{currentrow.empaddress}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <NavigationBar />
      <br />
      <h3>ALL EMPLOYEE DETAILS</h3>
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


export default DisplayAll