import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import './Footer.scss';
import Button from "@mui/material/Button";
import logo from '../../logo.png'


const Footer = () => {
  return (
    <div className="footer-whole-cont">
      <div className="footer-cont">
        <div className="footer-part1">
          <p><span>ColorsBy</span><span style={{color:"orange"}}>Tilewa</span></p>
          
        </div>

        <div className="hr-footer" > </div>


        <div className="footer-part2">
          <Link to="/about">About</Link>
        </div>

        <div className="hr-footer" > </div>


        <div className="footer-part3">
          <img src={logo} height="100"/>
        </div>
            <div className="hr-footer" > </div>
        <div className="footer-part4">
          <h6>Reach us on</h6>
          <a href="mailto:stboutique@gmail.com">enquiry@colorsbytilewa</a>
          <div className="social-cont">
            <a href="https://instagram.com/colorsbytilewa"><InstagramIcon/></a>
            <PhoneIcon/><span style={{color:"white"}}>+44 7464808767</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
