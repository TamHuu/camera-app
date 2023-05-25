import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logout from "./pages/Logout/Logout";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/Product/ProductDetail";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
