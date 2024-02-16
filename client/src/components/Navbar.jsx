import {Link} from "react-router-dom"
import '../assets/navbar.css'




export default function Navbar() {
 

  return (
<nav className="navbar navbar-expand-lg fixed-top  navBarCustom ">
  <div className="container">
    <a className="navbar-brand" href="#">
      <h5>IT PARK</h5>
    </a>
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto align-items-center">
       
         
           <li className="nav-item ms-3 navLink ">
        <Link  to='/'  style={{color:'white'}}>Home</Link>
        </li>


        <li className="nav-item ms-3">
        <Link to='/register'  style={{color:'white', border:"1px solid #dd2476", padding:"3px 10px", borderRadius:"10px",  }}>Register</Link>
        </li>


        <li className="nav-item ms-3">
        <Link to='/login'  style={{color:'white', border:"1px solid #dd2476", padding:"3px 10px", borderRadius:"10px",  }}>Login</Link>
         </li>
        
        
       

          
            <li className="nav-item ms-3">
            <Link to='/login'  style={{color:'white', border:"1px solid #dd2476", padding:"3px 10px", borderRadius:"10px",  }}>Account</Link>
            </li>
        

       
      </ul>
      
      
    </div>
    
  </div>
  
</nav>



  )
}

   