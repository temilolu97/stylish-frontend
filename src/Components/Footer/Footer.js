import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import './Footer.scss';
import Button from "@mui/material/Button";


const Footer = () => {
  return (
    <div className="footer-whole-cont">
      <div className="footer-cont">
        <div className="footer-part1">
          <p><span>ColorsBy</span><span style={{color:"orange"}}>Tilewa</span></p>
          
        </div>

        <div className="hr-footer" > </div>


        <div className="footer-part2">
          <Link to="#">About</Link>
          <Link to="#">Jobs</Link>
          <Link to="#">Docs</Link>
        </div>

        <div className="hr-footer" > </div>


        <div className="footer-part3">
          <Link to="#">Terms and Condition</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Cookie Policy</Link>
        </div>
            <div className="hr-footer" > </div>
        <div className="footer-part4">
          <h6>Reach us on</h6>
          <a href="mailto:stboutique@gmail.com">enquiry@colorsbytilewa</a>
          <div className="social-cont">
            <InstagramIcon to="https://instagram.com/colorsbytilewa" />
            <PhoneIcon/>+44 7464808767
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
