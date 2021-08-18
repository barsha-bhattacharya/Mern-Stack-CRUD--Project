import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';

function UpdateProfile(props) {
    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [epass, setEmpPass] = useState("");
    const [eaddress, setEmpAddress] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeEmpName = (e) => setEmpName(e.target.value);
    const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
    const onChangeEmpMobile = (e) => setEmpmobile(e.target.value);
    const onChangeEmpPass = (e) => setEmpPass(e.target.value);
    const onChangeEmpAddress = (e) => setEmpAddress(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        const empinfo = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            emppass: epass,
            empaddress: eaddress
        }

        axios.put('http://localhost:4500/emp/update', empinfo)
            .then(res => {
                console.log(res.data)
                setMessage('PROFILE UPDATED')
            })
            .catch(err => console.log(err))

        setEmpName('')
        setEmpEmail('')
        setEmpmobile('')
        setEmpPass('')
        setEmpAddress('')

    }

    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        let empemailid = sessionStorage.getItem('useremail')
        if (empemailid == null)
            empemailid = props.email
        axios.get('http://localhost:4500/emp/search/' + empemailid)
            .then(response => {
                console.log(response.data)
                const { empname, empemail, empmobile, emppass, empaddress } = response.data[0]
                setEmpName(empname)
                setEmpEmail(empemail)
                setEmpmobile(empmobile)
                setEmpPass(emppass)
                setEmpAddress(empaddress)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <NavigationBar />
            <br />
            <h3>PROFILE UPDATE</h3>
            <b style={{ color: "red" }}> {msg}</b>
            <form onSubmit={handleSubmit}>
                <label>NAME: </label> <br />
                <input type="text" value={ename}
                    onChange={onChangeEmpName} placeholder="Enter Name"
                    readOnly />
                <br /><br />

                <label>EMAIL: </label> <br />
                <input type="email" value={eemail}
                    onChange={onChangeEmpEmail} placeholder="Enter Email"
                    readOnly />
                <br /><br />

                <label>MOBILE: </label> <br />
                <input type="number" value={emobile}
                    onChange={onChangeEmpMobile} placeholder="Enter Mobile No"
                    required />
                <br /><br />

                <label>PASSWORD: </label> <br />
                <input type="password" value={epass}
                    onChange={onChangeEmpPass} placeholder="Enter Password"
                    required />
                <br /><br />

                <label>ADDRESS: </label> <br />
                <textarea value={eaddress}
                    onChange={onChangeEmpAddress} rows="3" >
                </textarea>
                <br /><br />

                <input type="submit" value="UPDATE PROFILE" className="btn btn-success" />

            </form>
        </div>
    )
}

export default UpdateProfile