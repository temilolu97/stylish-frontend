import React from 'react'
import Footer from '../Footer/Footer'
import Layout from '../Layout'
import Sidenav from '../Sidenav/Sidenav'
import Topnav from '../Topnav/Topnav'
import video from '../../tilewa.mp4'
import "./About.scss"
import zIndex from '@mui/material/styles/zIndex'

const About = () => {
  return (
      <div style={{backgroundColor:"#eee"}} className="vh-100" >
       <div className='home-whole-cont'>
           <Sidenav/>
           <Topnav/>
           
       </div>

       <div className="about-container"style={{marginLeft: "4%", overflowX : "hidden"}}>
       
	<div >
   
        <div className='bg-image col-lg-6 col-md-6 col-sm-12 text-center ' style={{  display: "flex", justifyContent: "space-between", alignItems: "center",   width: "100%",
    overflow: "hidden",
    height: "100vh"}} >



        <video className='video-display'  style={{width: "60%"}} autoPlay muted loop >
            <source style={{width: "100%"}} src={video} type="video/mp4">


            </source>
        </video>



            <p style={{ width: "37%", textAlign: "left"}}>
            <h4 style={{ marginBottom: "30px"}}>About <span>ColorsBy</span><span style={{color:"orange"}}>Tilewa</span></h4>
            Colors by Tilewa is a fashion brand that caters for bespoke bridals. We are keen about detailed stitching, neat finishing and proper fit.  At Colors by Tilewa, we pay more attention to the little fit details and we use multiple fittings during the construction process, we also produce with high quality of construction to give perfect fit. 
            What you see is what you get from us.
            </p>
        </div>
        <div className=' mb-2 mt-4 my-auto contact-form' >
        <div class="card mt-5 mx-auto p-4 bg-light">

            <h1 className='text-center'>Contact us</h1>
                <div class="card-body bg-light mt-2">
                    <div class="container">
                        <form id="contact-form" role="form">
                            <div class="controls">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_name">Firstname *</label> <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_lastname">Lastname *</label> <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_email">Email *</label> <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_need">Please specify your need *</label> <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                                                <option value="" selected disabled>--Select Your Issue--</option>
                                                <option>Request Invoice for order</option>
                                                <option>Request order status</option>
                                                <option>Haven't received cashback yet</option>
                                                <option>Other</option>
                                            </select> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group"> <label for="form_message">Message *</label> <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                    </div>
                                    <div class="col-md-12"> <input type="submit" class="btn btn-warning btn-send pt-2 btn-block mt-1 " value="Send Message"/> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
			
	</div>
</div>
    <Footer/>
       </div>
  )
}

export default About