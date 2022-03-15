import React, { useState, useEffect, useContext } from "react";
import "./Home.scss";
import { useParams, useNavigate } from "react-router-dom";


import axios from "axios";
import ProductItem from "./ProductItem";
import { cartContext } from "../../Context/CartProvider";

const StoreItems = () => {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [cart, setCart] = useContext(cartContext)
 
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let navigate = useNavigate();

  const gotoProduct = () => {
    navigate("/product");
  };
  const gotoCart = () => {
    navigate("/cart");
  };
  useEffect(async() => {
    const response = await axios.get('https://localhost:44381/api/Products/')
    setProducts(response.data)
    window.scrollTo(0, 0);
  }, []);

 
  const AddToCart =(product)=>{
    console.log(product)
      const{id} = product
      const exist = cart.findIndex(x=> x.id === id);
      console.log(exist)
      if(exist!==-1){
          cart[exist].qty++
          console.log(cart)
      }
      else{
          setCart([...cart,{...product, qty:1}])
      }
      
  }

  
  

  return (
    <section className="container-fluid mt-4" style={{backgroundColor:"#fff"}}>
      <h3 className="text-center">Our Dresses</h3>
      <div className="row">
        {products.map((item,index)=>(
           <div key={index} class="col-12 col-sm-8 col-md-6 col-lg-3">
           <div class="card">
             <img class="card-img" src={item.imageUrl} alt="Vans"/>
             
             <div class="card-body">
               <h4 class="card-title" style={{color:"orange"}}>{item.name}</h4>
               <h6 class="card-subtitle mb-2 text-muted">{item.description}</h6>
               <div class=" d-flex justify-content-between align-items-center">
                 <div class="price "><h5 class="mt-4">£{item.price}</h5></div>
                 <button type="button" onClick={()=>{AddToCart(item)}} class="btn btn-outline-primary">Add To Cart</button>
               </div>
             </div>
           </div>
         </div>
        ))}
        
      </div>
</section>
  )
};

export default StoreItems;
