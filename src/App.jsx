import './App.css';
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
        <Announcement/>
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/product" element={<Product/>}/>
                <Route path = "/productList" element={<ProductList/>}/>
                <Route path = "/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
