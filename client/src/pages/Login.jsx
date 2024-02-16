import { useState } from 'react'
import axios from 'axios'
import {toast} from "react-hot-toast"
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const [data,setData]  = useState({
    email:'',
    password:''
    })
 

    const loginUser = async (e) =>{
        e.preventDefault()
        const {email , password} = data
        try {
            const {data} = await axios.post('/login', {
                email,
                password
            });
             if(data.error) {
                toast.error(data.error)
             }else{
                setData({})
                navigate('/dashboard')
             }
        } catch (error) {
            
        }
    } 

    return (
    <div>
<form onSubmit={loginUser}>

  <div className="input-group mb-3">
    <span className="input-group-text bg-primary"><i className="bi bi-envelope text-white" /></span>
    <input type="email" className="form-control" placeholder='Enter Your Email' value={data.email} onChange={(e) => setData({...data,email:e.target.value}) } />
  </div>
  <div className="input-group mb-3">
    <span className="input-group-text bg-primary"><i className="bi bi-key-fill text-white" /></span>
    <input type="password" className="form-control" placeholder='Enter Your Password' value={data.password} onChange={(e) => setData({...data,password:e.target.value})} />
  </div>
  <div className="d-grid col-12 mx-auto">
    <button className="btn btn-primary" type="submit"><span /> SignIn</button>
  </div>
  <p className="text-center mt-3">Already have an account?
    <span className="text-primary"> <Link to="/register"> Sign in</Link></span>
  </p>
</form>



    </div>
  )
}
