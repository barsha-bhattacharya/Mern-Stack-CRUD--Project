import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';

function Registration() {

    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [edob, setEmpDOB] = useState("");
    const [epass, setEmpPass] = useState("");
    const [egender, setEmpGender] = useState("");
    const [ecountry, setEmpCountry] = useState("");
    const [eaddress, setEmpAddress] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeEmpName = (e) => setEmpName(e.target.value);
    const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
    const onChangeEmpMobile = (e) => setEmpmobile(e.target.value);
    const onChangeEmpDOB = (e) => setEmpDOB(e.target.value);
    const onChangeEmpPass = (e) => setEmpPass(e.target.value);
    const onChangeEmpGender = (e) => setEmpGender(e.target.value);
    const onChangeEmpCountry = (e) => setEmpCountry(e.target.value);
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
            empdob: edob,
            emppass: epass,
            empgender: egender,
            empcountry: ecountry,
            empaddress: eaddress
        }

        axios.post('http://localhost:4500/emp/register', empinfo)
            .then(res => {
                console.log(res.data)
                setMessage('REGISTRATION SUCCESSFUL')
            });

        setEmpName('')
        setEmpEmail('')
        setEmpmobile('')
        setEmpDOB('')
        setEmpPass('')
        setEmpGender('')
        setEmpCountry('')
        setEmpAddress('')

    }

    return (
        <div>
            <NavigationBar />
            <br />
            
            <h3>REGISTRATION FORM</h3>
            <h5>(Above 18 Years should Register)</h5>
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={ename}
                    onChange={onChangeEmpName} placeholder="Enter Name"
                    required />
                <br /><br />

                <input type="email" value={eemail}
                    onChange={onChangeEmpEmail} placeholder="Enter Email"
                    required />
                <br /><br />

                <input type="number" value={emobile}
                    onChange={onChangeEmpMobile} placeholder="Enter Mobile No"
                    required />
                <br /><br />
                
                      
                <label>DOB</label> 
                <br /><br />    
                <input type="date" value={edob}
                    onChange={onChangeEmpDOB} />
                    <br /><br />
                
                


                <input type="password" value={epass}
                    onChange={onChangeEmpPass} placeholder="Enter Password"
                    required />
                <br /><br />

                <input type="radio" name="gender" value="MALE"
                    checked={egender === 'MALE'}
                    onChange={onChangeEmpGender} />
                <label>Male</label>

                <input type="radio" name="gender" value="FEMALE"
                    checked={egender === 'FEMALE'}
                    onChange={onChangeEmpGender} />
                <label>Female</label>

                <input type="radio" name="gender" value="FEMALE"
                    checked={egender === 'FEMALE'}
                    onChange={onChangeEmpGender} />
                <label>Prefer Not To Say</label>
                <br /><br />

                <select value={ecountry} onChange={onChangeEmpCountry}>\
                <option value="#">Choose your country</option>
                    <option value="AF">Sri Lanka</option>
                    <option value="India">India</option>
                    <option value="UK">Nepal</option>
                    <option value="USA">Bhutan</option>
                </select>
                <br /><br />

                <label>City: </label> <br />
                <textarea value={eaddress}
                    onChange={onChangeEmpAddress} rows="1" >
                </textarea>
                <br /><br />

                <input type="submit" value="REGISTER" className="btn btn-primary" />

            </form>
        </div>
    )
}


export default Registration
