import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import './Footer.scss';
import Button from "@mui/material/Button";
import logo from '../../logo.png'
import BusinessIcon from '@mui/icons-material/Business';


const Footer = () => {
  return (
    <div className="footer-whole-cont">
      <div className="footer-cont">
        <div className="footer-part1">
          <img src={logo} height="160"/>
        </div>

        <div className="hr-footer" > </div>


        <div className="footer-part2">
          <div>
            <BusinessIcon/><span className="ms-2" style={{color:"white"}}>Address</span>
            <div style={{color:"white"}}>
              <p>Flat 4, St James Chambers,St James Street,Derby ,DE1 1QZ</p>
            </div>
          </div>
        </div>

        <div className="hr-footer" > </div>


        {/* <div className="footer-part3">
          <p><span style={{color:"white"}}>ColorsBy</span><span style={{color:"orange"}}>Tilewa</span></p>
        </div> */}
            <div className="hr-footer" > </div>
        <div className="footer-part4">
          <h6>Reach us on</h6>
          <a href="mailto:stboutique@gmail.com">enquiry@colorsbytilewa.com</a>
          <div className>
            <div className="row">
              <a href="https://instagram.com/colorsbytilewa"><InstagramIcon/><span style={{color:"white"}}>@colorsbytilewa</span></a>
            </div>
            <div className="row">
              <a><PhoneIcon/><span style={{color:"white"}}>+44 7464808767</span></a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
