import React, { useState, useEffect, useContext } from "react";
import "./Sidenav.scss";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";



// MATERIAL UI IMPORTS
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import MenuIcon from "@mui/icons-material/Menu";

// BOOTSTRAP
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { cartContext } from "../../Context/CartProvider";


const Sidenav = () => {
  const [open, setOpen] = React.useState(true);
  const [cart] = useContext(cartContext)
  const handleClick = () => {
    setOpen(!open);
  };

  // BOOTSTRAP OFF CANVAS
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // ROUTING TO EACH OF THEIR PAGES

  let navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  const gotoCart = () => {
    navigate("/cart");
  };


  const gotoStore = () => {
    navigate("/store");
  };

  const gotoStoreGlasses = () => {
    navigate("/store/#glasses");
  };


  return (
    // <div>
    <div className="sidenav-cont">
      <div className="burger-cont">
      <MenuIcon onClick={handleShow} />
      </div>

      <div className="off-small-icon">
        <Link to="/">
          <Button variant="primary">
            <HomeOutlinedIcon />
          </Button>
        </Link>

        <Link to="/cart">
          <Button variant="primary">
            <ShoppingCartOutlinedIcon />({cart.length})
          </Button>
        </Link>
        
      </div>

      <>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            
          </Offcanvas.Header>
          <Offcanvas.Body>
            <List
              sx={{ width: "100%", maxWidth: 360, marginTop: "20px" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              //   subheader={
              //     <ListSubheader component="div" id="nested-list-subheader">
              //       Nested List Items
              //     </ListSubheader>
              //   }
            >
              <ListItemButton onClick={(e) => gotoHome()}>
                <ListItemIcon  >
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>

              <ListItemButton onClick={(e) => gotoCart()}>
                <ListItemIcon  >
                  <ShoppingCartOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={`Cart(${cart.length})`} />
              </ListItemButton>

            </List>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>

    // </div>
  );
};

export default Sidenav;
