import React, { useState } from "react";
import "./AdminLogin.scss"

// MATERIAL UI IMPORTS
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AdminLogin = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("")

 const navigate = useNavigate()
 let user;
 const handleSubmit= async(e)=>{
  e.preventDefault()
  const response = await axios.post('https://localhost:44381/api/Users/login',{email, password})
  user = response.data
  if(user.role =="1"){
    window.alert("Succefully logged in")
    localStorage.setItem('user', JSON.stringify(user))
    // toast.success('Successfully logged in')
    navigate('/admin/products')
  }else{
    window.alert('Unable to login due to incorrect details')
  }
}
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', bgcolor: "#182030", height: "100vh" }}>
              <h1 className="a-l">Admin Login</h1>
            <form className="admin-form" action="">
              <div className="admin-text-input">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="dense"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  m="2"
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="dense"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>

              <Button onClick={handleSubmit} type="submit" fullWidth sx={{marginTop: "20px"}} variant="contained">Login</Button>
            </form>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default AdminLogin;
