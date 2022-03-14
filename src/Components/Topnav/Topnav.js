import React, { useEffect, useState } from "react";
import "./Topnav.scss";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";



const Topnav = () => {
  const [userDetails, setUserDetails]=useState(null)
  const navigate = useNavigate()
  function getDetails(){
    const user = localStorage.getItem('user')
    if(user){
      setUserDetails(JSON.parse(user))
    }  else {
        setUserDetails(null)
    }
}
useEffect(()=>{
  getDetails()
},[])
const handleLogout = ()=>{
  localStorage.clear()
  getDetails()
  navigate("/login")
}
  return (
    <div className="topnav-cont">
      <div className="search-cont">
        <input type="text" placeholder="What are you looking for......"/>
        <div className="search-icon">
        <SearchIcon />
        </div>
      </div>

      <div className="account-bar">

        {/* <h6>Adenuga</h6>
        <AccountCircleOutlinedIcon/> */}

        {/* IF USER IS NOT LOGGED IN SO CONDITIONAL STATEMENT COMES IN HERE */}
        <Link to="/about" style={{textDecoration:"none", fontFamily:"alata",color:"black"}}>About</Link>
        {userDetails ? 
        (
          <div class="dropdown">
            <a class="btn dropdown-toggle" style={{fontFamily:"alata",color:"black"}} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              {`${userDetails.firstName} ${userDetails.lastName}`}
            </a>
            
            {userDetails.role ==1 ?
            (
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><Link to="/admin/products" class="dropdown-item" >Dashboard</Link></li>
                <li><a class="dropdown-item" onClick={handleLogout}>Logout</a></li> 
              </ul>
            ):(
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        
              <li><a class="dropdown-item" onClick={handleLogout}>Logout</a></li> 
            </ul>
            )
            }
          </div>
        ):(
          <div>
           
            <Link to="/login" className="log-btn-top">Login</Link>
          <Link to="/signup" className="sign-btn-top">Signup</Link></div>
        )

        }
        
      </div>
    </div>
  );
};

export default Topnav;

