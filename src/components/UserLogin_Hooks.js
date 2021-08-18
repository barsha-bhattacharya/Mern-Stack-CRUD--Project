import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';

function UserLogin(props) {
  const [eemail, setEmpEmail] = useState("");
  const [epass, setEmpPass] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
  const onChangeEmpPass = (e) => setEmpPass(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${eemail}`);
    console.log(`PASS: ${epass}`);

    const emplogininfo = {
      empemail: eemail,
      emppass: epass
    }

    axios.post('http://localhost:4500/emp/logincheck', emplogininfo)
      .then(res => {
        console.log(res.data)
        sessionStorage.setItem("Key_Veriable", 'USER')
        sessionStorage.setItem("useremail", res.data[0].empemail)
        sessionStorage.setItem("username", res.data[0].empname)
        props.history.push('/userafterlogin')
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID UID OR PASSWORD')
      })

    setEmpEmail('')
    setEmpPass('')
  }

  return (
    <div>
      <NavigationBar />
      <br />
      
      <h1>Login</h1>
      <b style={{ color: "red" }}> {msg} </b>
      <form method="post" onSubmit={handleSubmit}>
        <input type="email" value={eemail}
          onChange={onChangeEmpEmail}
          placeholder="Enter Email"
          required />
        <br /><br />
        
        
        <input type="password" value={epass}
          placeholder="Enter Password"
          onChange={onChangeEmpPass}
          required />
        <br /><br />
        <input type="submit" value="LOGIN" className="btn btn-success" />
      
    </form>
<br></br>
    <div>
     <img src="./image/blog3.jpg" alt="Example1" width="500" height="300"/>
     </div>
    </div>
  )
}

export default UserLogin
