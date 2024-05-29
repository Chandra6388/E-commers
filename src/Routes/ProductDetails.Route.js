import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Component/Header/Header";
import Main_header from '../Component/Header/Main_header';
import ProductPage  from '../Layout/ProductDetails/ProductDetails'
import AddToCart from "../Layout/ProductDetails/AddToCart";


const ProductDetails = () => {
  return (
    <>
      <div className="fixed-top">
        <Main_header className="bg-white border-bottom" />
        <Header className="bg-white border-bottom" />
      </div>
      <div className="pt-5" style={{ marginTop: '78px' }}>
        <Routes>
          <Route exact path="/details" element={<ProductPage />} />
          <Route exact path="/addtocart" element={<AddToCart />} />

        </Routes>
      </div>
    </>
  );
};

export default ProductDetails;
