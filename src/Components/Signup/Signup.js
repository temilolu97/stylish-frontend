import React from "react";
import "./Signup.scss";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import toast from "react-hot-toast";
import axios from "axios";

const Signup = () => {



  // SHOW AND HIDE PASSWORD


  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const {firstName, lastName, email, password} = values
  const navigate = useNavigate()
  const handleSubmit= async(e)=>{
    e.preventDefault()
    const response = await axios.post('https://localhost:44381/api/Users/register',{firstName,lastName, email, password})
    console.log(response)
    toast.success(response.data.message)
    navigate('/login')
  }
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
    <div className="container-sign">

      <div className="top-nav">
        <div className="logo">ST</div>
        <Link to="/">Home</Link>
        <Link to="/Signup">Join</Link>
        
      </div>

      <div className="signup-cont">

        <div className="signup-whole-cont">
          <div className="top-sign-up">
            <h5>START FOR FREE</h5>
            <h1>
              Create new account <div className="full-stop"></div>{" "}
            </h1>
            <p>
              Already a member? <Link to="/Login" className="log-in-sign"> Log in </Link>{" "}
            </p>
          </div>

          <form className="signup-form">
            <div className="sign-first-last">
              <TextField
                sx={{ width: 280 }}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                value={values.firstName}
                onChange={handleChange('firstName')}
              />
              <TextField
                sx={{ width: 280 }}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                className="margin-form"
                value={values.lastName}
                onChange={handleChange('lastName')}
              />
            </div>

            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={values.email}
              onChange={handleChange('email')}
            />



            <div className="sign-first-last">
              


<OutlinedInput

sx={{ width: 280, outline: "white" }}
className=""
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
            </div>

            <Button onClick={handleSubmit} fullWidth size="large" variant="contained">Sign Up</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
