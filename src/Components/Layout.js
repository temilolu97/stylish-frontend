import React from 'react'
import Sidenav from './Sidenav/Sidenav';
import {Box } from "@mui/material"
import "../../src/App.css"
import Topnav from './Topnav/Topnav';
const Layout = ({ children }) => {
    return (
  
        <Box className='layout-cont' display="flex" fullWidth>
           <Sidenav/> 
           <Topnav/>
          <div className="children-compp">
            {children}
          </div>
        </Box>
    );
  };
  
  export default Layout;