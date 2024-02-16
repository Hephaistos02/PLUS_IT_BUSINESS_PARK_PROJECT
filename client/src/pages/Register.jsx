import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { Link,useNavigate } from 'react-router-dom'


export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name:"",
        email: "", 
        password: ""
    })

    const registerUser = async (e) => {
        e.preventDefault()    //to prevent the page from automatically reloading
        const {name,email,password}  = data
        try {
            const {data} = await axios.post('/register',{
                name,email,password
            })
            if(data.error) {
                toast.error(data.error)
            }else{
                
                setData({})
                toast.success("Registration Successfull. Please Login")
                navigate("/login")
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
  <form onSubmit={registerUser}>
  <div className="input-group mb-3">
    <span className="input-group-text bg-primary"><i className="bi bi-person-plus-fill text-white" /></span>
    <input type="text" className="form-control" placeholder="Enter Your Name"  onChange={(e) =>setData({...data,name:e.target.value}) } />
  </div>
  <div className="input-group mb-3">
    <span className="input-group-text bg-primary"><i className="bi bi-envelope text-white" /></span>
    <input type="email" className="form-control" placeholder="Enter Your Email"   onChange={(e) =>setData({...data,email:e.target.value}) } />
  </div>
  <div className="input-group mb-3">
    <span className="input-group-text bg-primary"><i className="bi bi-key-fill text-white" /></span>
    <input type="password" className="form-control" placeholder="Enter Your Password"   onChange={(e) =>setData({...data,password:e.target.value}) } />
  </div>
  <div className="d-grid col-12 mx-auto">
    <button className="btn btn-primary" type="submit"><span /> Sign up</button>
  </div>
  <p className="text-center mt-3">Already have an account?
  <span className="text-primary"> <Link to="/login">Sign in</Link></span>
  </p>
</form>


   


    </div>
  )
}
