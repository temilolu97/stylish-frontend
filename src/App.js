import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout";
import SingleProduct from "./Components/Product/SingleProduct";
import Cart from "./Components/Cart/Cart";
import AdminLogin from "./Components/Admin/AdminLogin/AdminLogin";
import AdminProducts from "./Components/Admin/AdminProducts/AdminProducts";
import { useState } from "react";
import AllCategories from "./Components/Admin/Categories/AllCategories";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import About from "./Components/About/About";
import SearchResult from "./Components/SearchResult/SearchResult";

function App() {
  const [products, setProducts] = useState([])

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
            exact
          />
          <Route path="/admin/login" element={<AdminLogin />} exact />
          <Route path="/Login" element={<Login />} exact />
          <Route path="/Signup" element={<Signup />} exact />
          <Route path="/about" element={<About/>}/>
          <Route path="/result" element={<SearchResult/>}/>
          <Route path="/products/:id" element={<SingleProduct />} exact />

          <Route element={<ProtectedRoutes/>}>
            <Route path="/admin/products" element={<AdminProducts />} exact />

           
            <Route path="/cart" element={<Cart />} exact />
            
            <Route path="/admin/categories" element={<AllCategories/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
