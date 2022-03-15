import React, { useEffect, useState } from "react";
import "./Home.scss";
import { useParams, useNavigate, Link } from "react-router-dom";

// BOOTSTRAP IMPORTS
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

// MATERIAL UI IMPORTS
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StoreItems from "./StoreItems";
import Topnav from "../Topnav/Topnav";
import Sidenav from "../Sidenav/Sidenav";
import Footer from "../Footer/Footer";
import axios from "axios";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState([])
    useEffect(async()=>{
        const response = await axios.get("https://localhost:44381/api/Products/featured-products");
        setFeaturedProducts(response.data)
    },[featuredProducts])
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let navigate = useNavigate();

  const gotoSignup = () => {
    navigate("/Signup");
  };

  return (
    <>
    <div className="home-whole-cont">

        <Sidenav/>
      <div className="home-cont">
    <Topnav />
        <div className="caro-cont">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {featuredProducts.map((item,index)=>(
                            <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={item.imageUrl}
                              alt="Second slide"
                            />
                          </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <StoreItems/>
        <Footer/>
      </div>
      </div>

    </>
  );
};

export default Home;
