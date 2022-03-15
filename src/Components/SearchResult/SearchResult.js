import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Sidenav from '../Sidenav/Sidenav'
import Topnav from '../Topnav/Topnav'

const SearchResult = () => {
    const location= useLocation()
    const state= location.state
  return (
    <div>
        <Sidenav/>
        <Topnav/>
        <div className='container-fluid vh-100' style={{padding:"100px"}}>
        <h4>Your search result</h4>
        <div className='row'>
            {state.map((item,index)=>(
                <div key={index} className='col-sm-12 col-md-4 col-lg-3'>
                    <div class="card">
                <div class="d-flex justify-content-between p-3">
                </div>
                <img
                    src={item.imageUrl}
                    class="card-img-top"
                    alt="Laptop"
                />
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                    <p class="small"><a href="#!" class="text-muted"></a></p>
                    </div>

                    <div class="d-flex justify-content-between mb-3">

                    <h5 class="mb-0">{item.name}</h5>
                    
                    <h5 class="text-dark mb-0">£{item.price}</h5>
                    </div>
                    <div className="text-center">
                    </div>
                    
                </div>
            </div>
                </div>
            ))}
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default SearchResult