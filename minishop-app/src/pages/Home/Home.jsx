import React from 'react'
import ProductList from '../Product/ProductList'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
const Home = () => {
  return (
    <div>
            <Header />
        <ProductList/>
           <Footer />
    </div>
  )
}

export default Home