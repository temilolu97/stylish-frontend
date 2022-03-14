import React, {useContext, useEffect, useState} from "react";
import "./Cart.scss";
import Footer from "../Footer/Footer";

// MATERIAL UI IMPORTS
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Sidenav from "../Sidenav/Sidenav";
import Topnav from "../Topnav/Topnav";

// MATERIAL IMPORTS 2
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MailIcon from "@mui/icons-material/Mail";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { cartContext } from "../../Context/CartProvider";

const Cart = () => {

  const [cart, setCart] = useContext(cartContext)
  const [count, setCount] = useState(1);
  const [invisible, setInvisible] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
}, [])

const total = cart.reduce((acc,item)=>{
  acc= acc+ item.price*item.qty
  return acc
},0)
const handleBadgeVisibility = () => {
  setInvisible(!invisible);
};

const theme = useTheme();
  if(cart.length == 0){
    return(
      <div className="home-whole-cont">
        <Sidenav />
        <div className="cart-cont">
          <Topnav />
          <div className="cart-w-c">
            <p >Your cart is currently empty. Please go back and add items to cart</p>
          </div>
        </div>
      </div>
    )
  }
  else{

   return (
    <div className="home-whole-cont">
      <Sidenav />

      <div className="cart-cont">
        <Topnav />

        <div className="cart-w-c">
          {cart.map((item) => {
            return (
              <Card
                className="cart-card"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography component="h5" variant="h5">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="p"
                    >
                      {item.description}{" "}
                    </Typography>

                    <b>£{item.price}</b>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    

                    <div>
                      <ButtonGroup>
                        <Button
                          aria-label="reduce"
                          onClick={() => {
                            setCount(Math.max((item.qty) - 1, 0));
                          }}
                        >
                          <RemoveIcon fontSize="small" />
                        </Button>
                        <Badge color="secondary" badgeContent={item.qty}>
                          {/* <MailIcon /> */}
                        </Badge>
                        <Button
                          aria-label="increase"
                          onClick={() => {
                            setCount((item.qty) + 1);
                          }}
                        >
                          <AddIcon fontSize="small" />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: "50%" }}
                  image={item.imageUrl}
                />
              </Card>
            );
          })}
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <h4>Total: £{total}</h4>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
};

export default Cart;
