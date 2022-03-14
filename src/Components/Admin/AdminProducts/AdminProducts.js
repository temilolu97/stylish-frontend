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

const AdminProducts = () => {
  const [products, setProducts] = useState([])
  useEffect(async() => {
    const response = await axios.get('https://localhost:44381/api/Products/')
    setProducts(response.data)
    window.scrollTo(0, 0);
  }, [products]);

  // MODAL

  const [show, setShow] = useState(false);


  const handleClose = (e) => {
    setShow(false);
    // setLoading(false);
  };


  const handleShow = (e) => {
    // setLoading(true);
    setShow(true);
  };

  const [show2, setShow2] = useState(false);



  const handleCloseEdit = (e) => {
    setShow2(false);
    setShow(true);
    // setLoading(false);
  };


  const handleShowEdit = (e) => {
    // setLoading(true);
    setShow2(true);
    setShow(false);
  };
  
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
                    <h5 class="mb-0">{product.name}</h5>
                    <h6 class="text-dark mb-0">£{product.price}</h6>
                    </div>
                    
                </div>
            </div>
        </div> 
          );
        })}


        {/* MODAL DETAILS PRODUCTS */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Rocket Jacket</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Rocket jacket product</h1>
            <p> <b>Description: </b> <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellat ipsa eum officiis facilis quam sequi, doloribus vero quisquam veritatis numquam placeat totam. Modi voluptatem quidem cumque rem cupiditate consequuntur?</p>
            <h5>&#8358;20,000</h5>

            <hr />

            <h4>Add-ons</h4>
            <form action="">
              <label htmlFor=""> Color</label>
              <br />
              <input type="color" />  

              <br />
              <label htmlFor="">Size</label>
              <br />
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>  
              </select>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleShowEdit}>
              Edit
            </Button>
          </Modal.Footer>
        </Modal>


        {/* EDIT PRODUCTS */}
        <Modal show={show2} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Rocket Jacket</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>Rocket jacket product</h1>
            {/* <p> <b>Description: </b> <br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis repellat ipsa eum officiis facilis quam sequi, doloribus vero quisquam veritatis numquam placeat totam. Modi voluptatem quidem cumque rem cupiditate consequuntur?</p>
            <h5>&#8358;20,000</h5>

            <hr />

            <h4>Add-ons</h4>
            <form action="">
              <label htmlFor=""> Color</label>
              <br />
              <input type="color" />  

              <br />
              <label htmlFor="">Size</label>
              <br />
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>  
              </select>
            </form> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
  }
};

export default AdminProducts;
