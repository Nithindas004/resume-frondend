import React, { useState } from 'react'
import ResumeNav from './ResumeNav'
import axios from 'axios'
import RegisterResume from './RegisterResume'



const LoginRes = () => {
    const [input,setInput]= new useState(
        {
            "username":"",
            "password":""
        }
    )
    const inputHandler= (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues =()=>{
        //console.log(input)
        axios.post("http://localhost:3001/api/resume/login",input).then(
            (response)=>{
                //console.log(response.data)
                if(response.data.status=="success")
                {
                    alert("Success")
                    
                }
                else if(response.data.status=="Incorrect password")
                {
                    alert("Incorrect password")
                }
                else
                {
                    alert("Wrong username")
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
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-info" onClick={readValues}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginRes