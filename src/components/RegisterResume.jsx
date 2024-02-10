import axios from 'axios'
import React, { useState } from 'react'
import ResumeNav from './ResumeNav'
import { Link } from 'react-router-dom'

const RegisterResume = () => {
    const [input,setInput] = new useState(
        {
            "username":"",
            "email":"",
            "password":""
        }
    )
    const inputHandler= (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues = ()=>{
        axios.post("http://localhost:3001/api/resume/register",input).then(
            (response)=>{
                if (response.data.status=="success") {
                    setInput(
                        {
                            "username":"",
                            "email":"",
                            "password":""
                        }
                    )
                    alert("Successfully registered")
                }
                else
                {
                    alert("Something went wrong")
                }
            }
        )
    }
  return (
    <div>
        <ResumeNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" className="form-control" name='username' value={input.username} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password"  className="form-control" value={input.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-info" onClick={readValues}>Register</button>&nbsp;
                            <Link to="/login">Login here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterResume