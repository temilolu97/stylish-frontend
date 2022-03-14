import React, { useState, useEffect } from "react";
import "./Home.scss";
import { useParams, useNavigate } from "react-router-dom";

// MATERIAL UI IMPORTS
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import ProductItem from "./ProductItem";

const StoreItems = () => {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

 
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

  // ITEMS

  
  useEffect(async()=>{
    const response = await axios.get('https://localhost:44381/api/Products');
    setProducts(response.data)
    const categoriesResp = await axios.get("https://localhost:44381/api/Categories");
        setCategories(categoriesResp.data)
  },[products])
  if(products.length == 0){
    return(
      <div className="text-center">
        <p>No products in the database currently</p>
      </div>
    )
  }else{

  return (
    <section style={{backgroundColor:"#fff"}}>
    {categories.map((category,index)=>(
        <div className="container py-5">
            <h3 >{category.name}</h3>
            <hr/>
            <div className="row">
                {products.filter((product)=>category.id === product.categoryId).map(product=>(
                    <ProductItem product={product} category={category.name} />
                ))}
            </div>
        </div>
    ))}
</section>
  );}
};

export default StoreItems;
