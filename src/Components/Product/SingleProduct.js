import React, {useContext, useEffect, useState} from "react";
import Sidenav from "../Sidenav/Sidenav";
import Topnav from "../Topnav/Topnav";
import "./SingleProduct.scss";
import Button from "@mui/material/Button";
import Footer from "../Footer/Footer";
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import { useParams } from "react-router-dom";
import axios from "axios";
import { cartContext } from "../../Context/CartProvider";

const SingleProduct = () => {
  const [productDetails, setProductDetails] = useState({});
  let params = useParams()

    useEffect(async() => {
        window.scrollTo(0, 0);
        const response = await axios.get(`https://localhost:44381/api/Products/${params.id}`)
        setProductDetails(response.data)
        console.log(productDetails)
    }, [])

    const [cart, setCart] = useContext(cartContext)
    const AddToCart =(product)=>{
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
    <div className="home-whole-cont">
      <Sidenav />
      <div className="product-cont">
        <Topnav />

        <div className="top-product-cont">
          <div className="product-img">
            <img src={productDetails.imageUrl} alt="" />
          </div>

          <div className="product-details">
            <h3>{productDetails.name}</h3>

            <p className="product-description">
              {" "}
              <b>Description:</b> <br /> {productDetails.description}
            </p>

            <h6 className="product-price">£{productDetails.price}</h6>

            <div className="rating">
              {" "}
              <div className="icon-rating"> <StarPurple500OutlinedIcon/> 
              <StarPurple500OutlinedIcon/>
              <StarPurple500OutlinedIcon/>
              <StarPurple500OutlinedIcon/>
              <StarHalfOutlinedIcon/></div>
              <p>441 ratings</p>
            </div>

            <div className="btn-cont">
                <Button variant="contained">Buy Now</Button>
                <Button onClick={()=>AddToCart(productDetails)} vriant="outlined">Add to cart</Button>
            </div>
          </div>
        </div>

        <hr style={{ color: "black",  width: "100%", marginTop: "60px"}}/>


        <Footer/>
      </div>


    </div>
  );
};

export default SingleProduct;
