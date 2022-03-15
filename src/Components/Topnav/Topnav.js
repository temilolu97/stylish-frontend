import React, { useEffect, useState } from "react";
import "./Topnav.scss";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";



const Topnav = () => {
  const [userDetails, setUserDetails]=useState(null)
  const [searchData, setSearchData] = useState("")
  const [result, setResult] = useState([])

  const handleSearch =()=>{
    axios.get(`https://localhost:44381/search/${searchData}`).then(response=>{
        setResult(response.data)
        navigate("/result",{state: response.data})
    }).catch(error=>{
        console.log(error)
        alert(`No item with name ${searchData} exists`)
    })
    
    // setSearchResult(response)
    // console.log(searchResult)
}
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
    <div className="topnav-cont" style={{backgroundColor:"#182030"}}>
      <div className="search-cont">
        
        <input type="text" value={searchData} onChange={e=>{setSearchData(e.target.value)}} placeholder="What are you looking for......"/>
        <div className="search-icon" onClick={handleSearch}>
        <SearchIcon />
        </div>
      </div>

      <div className="account-bar">

        {/* <h6>Adenuga</h6>
        <AccountCircleOutlinedIcon/> */}

        {/* IF USER IS NOT LOGGED IN SO CONDITIONAL STATEMENT COMES IN HERE */}
        <Link to="/about" className="me-2" style={{textDecoration:"none" ,color:"white"}}>About</Link>
        {/* <Link to="/terms" style={{textDecoration:"none", color:"white"}}>Terms and Condtions</Link> */}
        {userDetails ? 
        (
          <div class="dropdown">
            <a class="btn dropdown-toggle" style={{textDecoration:"none", color:"white"}} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
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

