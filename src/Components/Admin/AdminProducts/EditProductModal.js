import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import toast, { Toaster } from 'react-hot-toast'

const EditProductModal = (props) => {
    const [categories, setCategories] = useState([])
    const [product,setProduct] = useState(props.product)
    useEffect(async ()=>{
        setProduct(props.product)
        const response = await axios.get("https://localhost:44381/api/Categories");
        setCategories(response.data)
    },[])
    
    const [productName, setProductName] = useState(props.product.name)
    const [description, setDescription] = useState(props.product.description)
    const [price, setPrice] = useState(props.product.price)
    const [featured, setFeatured] = useState(props.product.featured)
    const [category, setCategory] = useState(props.product.category)
    const [selectedImage, setSelectedImage] = useState(props.product.imageUrl)
    
    const handleUpdate = async(id)=>{
        const formData = new FormData();
        formData.append("name",productName);
        formData.append("description",description);
        formData.append("price",price);
        formData.append("imageFile", selectedImage);
        formData.append("featured",featured)
        formData.append("category", category)
        const response = await axios.put(`https://localhost:44381/api/Products/${id}`,formData,{
            headers:{
                'Authorization':JSON.parse(localStorage.getItem('user')).token,
                'content-type':'application/json'
            }
        })
        toast.success('Successfully updated product');
        props.onHide()
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Edit {props.product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form className='mb-3'>
            <div><label >Product Name</label>
            <input className='form-control' type="text" value={productName} onChange={(e)=>{setProductName(e.target.value)}} required/>
            </div>
            <div><label>Product Description</label>
            <input className='form-control' type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} required/>
            </div>
            <div><label>FeaturedImage</label>
            <select className='form-control' value={featured} onChange={(e)=>{setFeatured(e.target.value)}}>
                <option >Please pick an option</option>
                  <option  value={true}>Yes </option>
                  <option value={false}>No</option>
               
            </select>
            
            </div>
            <div><label>Categories</label>
            <select className='form-control' value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                <option >Please pick an option</option>
                {categories.map((item,index)=>(
                   <option  value={item.name}>{item.name} </option>
                ))}
               
            </select>
            
            </div>
             <div><label>Price</label>
            <input className='form-control' type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} required/>
            </div>
            <div>
                <label>Product Image</label>
                <input className='form-control'  type="file" onChange={(e)=>setSelectedImage(e.target.files[0])} required/>
            </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
            <Button variant="secondary" onClick={()=>{handleUpdate(props.product.id)}}>
              Update
            </Button>
            {/* <Button variant="primary" onClick={handleShow}>
              E
            </Button> */}
          </Modal.Footer>
      <Toaster/>
    </Modal>
  )
}

export default EditProductModal