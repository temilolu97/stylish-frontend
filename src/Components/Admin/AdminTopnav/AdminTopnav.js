import React, { useEffect, useState } from "react";
import "./AdminTopnav.scss"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";


// BOOTSTRAP
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";



const AdminTopnav = () => {

  const [show, setShow] = useState(false);
  const [categories, setCategories]=useState([])
  const [productName, setproductName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [categoryId,setCategoryId] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(async()=>{
    const response = await axios.get("https://localhost:44381/api/Categories");
    setCategories(response.data)
},[categories])
  const handleClose = (e) => {
    setShow(false);
    // setLoading(false);
  };


  const handleShow = (e) => {
    // setLoading(true);
    setShow(true);
  };

  const handleUpload = async (e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append("name",productName);
    formData.append("description",description);
    formData.append("price",price);
    formData.append("imageFile", selectedImage);
    formData.append("categoryId",categoryId)

    const response =axios.post('https://localhost:44381/api/Products',formData,{
        headers:{
            'Authorization':JSON.parse(localStorage.getItem('user')).token,
            'content-type':'application/json'
        }
    })
    toast.success('New product added successfully');
}

  return (
    <div>
      <Navbar  expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <div className="logo-cont-a">ST</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              // style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/admin/products">Products</Nav.Link>
              <Nav.Link href="/admin/categories">Categories</Nav.Link>
              <Nav.Link onClick={handleShow} href="#action2">Add Products</Nav.Link>

            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outlined">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* ADD NEW PRODUCTS FOR ADMIN */}
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a product</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <form className='mb-3'>
            <div><label >Product Name</label>
            <input className='form-control' type="text" value={productName} onChange={(e)=>{setproductName(e.target.value)}} required/>
            </div>
            <div><label>Product Description</label>
            <input className='form-control' type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} required/>
            </div>
            <div><label>Category</label>
            <select className='form-control' value={categoryId} onChange={(e)=>{setCategoryId(e.target.value)}}>
                <option >Please pick an option</option>
                {categories.map((category,index)=>(
                    <option key={index} value={category.id}>{category.name} </option>
                ))}
            </select>
            </div>
             <div><label>Price</label>
            <input className='form-control' type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} required/>
            </div>
            <div>
                <label>Product Image</label>
                <input className='form-control' type="file" onChange={(e)=>setSelectedImage(e.target.files[0])} required/>
            </div>
            <Toaster/>
        </form>
        
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleUpload}>
              Save
            </Button>
            {/* <Button variant="primary" onClick={handleShow}>
              E
            </Button> */}
          </Modal.Footer>
        </Modal>
    </div>
  );
};

export default AdminTopnav;
