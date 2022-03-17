import React, { useEffect, useState } from "react";
import "./AdminProducts.scss";

// MATERIAL UI IMPORTS
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AdminTopnav from "../AdminTopnav/AdminTopnav";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

// BOOTSTRAP
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import EditProductModal from "./EditProductModal";

const AdminProducts = () => {
  const [products, setProducts] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({})
  useEffect(async() => {
    const response = await axios.get('https://localhost:44381/api/Products/')
    setProducts(response.data)
    window.scrollTo(0, 0);
  }, [products]);

  // MODAL


  const [show2, setShow2] = useState(false);



  // const handleCloseEdit = (e) => {
  //   setShow2(false);
  //   setShow(true);
  //   // setLoading(false);
  // };


  // const handleShowEdit = (e) => {
  //   // setLoading(true);
  //   setShow2(true);
  //   setShow(false);
  // };

  const handleModal=(product)=>{
    setModalShow(true); 
    setCurrentProduct(product)
  }
  
  if(products.length ===0){
    return (
      <div>
        <AdminTopnav />
        <p className="text-center">No product has been uploaded yet</p>
      </div>
    )
  }
  else{

  return (
    <div >
      <AdminTopnav />
      <h5 className="text-center mt-4 mb-3">All Products</h5>

      <div className=" container row">
        {products.map((product) => {

          return (
            <div class="col-sm-12 col-md-4 col-lg-3 mb-4 mb-lg-0">
            
            <div class="card">
                <div class="d-flex justify-content-between p-3">
                </div>
                <img
                    src={product.imageUrl}
                    class="card-img-top"
                    alt="Laptop"
                />
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                    {/* <p class="small"><a href="#!" class="text-muted">{category}</a></p> */}
                    </div>

                    <div class="d-flex justify-content-between mb-3">
                      <div>
                    {product.category ?(<div><p>{product.category}</p></div>):(<span></span>)}
                    <h5 class="mb-0">{product.name}</h5>
                    <h6 class="text-dark mt-2 mb-0">£{product.price}</h6>
                    </div>
                    <div className="mt-2">
                      {/* <button className="btn btn-outline-primary p-1" onClick={()=>{handleModal(product)}}> Edit</button> */}
                    </div>
                    </div>
                    
                </div>
            </div>
            {/* <EditProductModal show={modalShow}
        onHide={() => setModalShow(false)} product={currentProduct}/> */}
        </div> 
          );
        })}


      </div>
    </div>
  );
  }
};

export default AdminProducts;
