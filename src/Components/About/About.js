import React from 'react'
import Footer from '../Footer/Footer'
import Layout from '../Layout'
import Sidenav from '../Sidenav/Sidenav'
import Topnav from '../Topnav/Topnav'

const About = () => {
  return (
      <div style={{backgroundColor:"#eee"}}>
       <div className='home-whole-cont'>
           <Sidenav/>
           <Topnav/>
           <div className='container mt-4 text-center'>
            <h3 style={{marginTop:"80px"}}>About Us</h3>
            <h5>In a nutshell -</h5>
            <p>We offer a wide range of quality and affordable items</p>
            <p>Over 1000 monthly visitors to our website </p>
            <p>
            We serve a retail customer base that continues to grow exponentially, 
            offering products that span various fashion items.
            </p>
            <p>
            We are customer-centric and are committed towards finding creative ways of improving our customers' shopping experience with us. For any questions kindly send us an email at admin@stylishboutique.com.
            </p>
            <p></p>
           </div>
       </div>

       <section class="container mb-4">

    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
   
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

       
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form"  method="POST">

                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                   
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                    

                </div>
                
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
               
                <div class="row">

                  
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-info" >Send</a>
            </div>
            <div class="status"></div>
        </div>
       
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>admin@stylishboutique.com</p>
                </li>
            </ul>
        </div>
     

    </div>

</section>
    <Footer/>
       </div>
  )
}

export default About