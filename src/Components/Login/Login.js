import React from "react";
import "./Login.scss";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

const Login = () => {
  // SHOW AND HIDE PASSWORD

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    
    showPassword: false,
  });

  const navigate = useNavigate()

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  let {email, password} = values
  let user;
  const handleSubmit = async(e)=>{
    const response = await axios.post('https://localhost:44381/api/Users/login',{email, password})
    user = response.data
    console.log(response)
    if(user ==null){
      window.alert("No user exists with these datails")
    }
    else{
      localStorage.setItem('user',JSON.stringify(user))
      if(user.role =="2"){
        window.alert("Successfully logged in")
        //toast.success('Successfully logged in')
        navigate('/')
      }else{
        window.alert("Unable to log in. Please check your details and try again")
        //toast.success('Successfully logged in')
        navigate('/login')
      }
    }    
  }
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#fff",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <div className="container-log">
      <div className="top-nav">
        <div className="logo">ST</div>
        <Link to="/">Home</Link>
        <Link to="/Signup">Join</Link>
      </div>

      <div className="login-cont">
        <div className="login-whole-cont">
          <div className="top-log-in">
            <h5>START FOR FREE</h5>
            <h1>
              Welcome back <div className="full-stop"></div>{" "}
            </h1>
            <p>
              Don't have an Account?{" "}
              <Link to="/Signup" className="sign-b"> Sign up </Link>{" "}
            </p>
          </div>

          <form className="signup-form">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={handleChange("email")}
              value={values.email}
            />

            <OutlinedInput
            fullWidth
              // sx={{ width: 280, outline: "white" }}
              className="margin-log"
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />

            <Button onClick={handleSubmit} fullWidth size="large" variant="contained">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
