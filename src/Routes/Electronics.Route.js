import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Component/Header/Header";
import Main_header from '../Component/Header/Main_header';
import Mobile from "../Layout/electronics/Mobile";  
import Laptop from "../Layout/electronics/Laptop";
import MobileAccessories from "../Layout/electronics/MobileAccessories";
import Headphones from "../Layout/electronics/Headphones";


const Electronics = () => {
  return (
    <>
      <div className="fixed-top">
        <Main_header className="bg-white border-bottom" />
        <Header className="bg-white border-bottom" />
      </div>
     
      <div className="pt-5" style={{ marginTop: '90px' }}>
      <Routes>
       
        <Route exact path="/mobiles" element={<Mobile />} />
        <Route exact path="/laptops" element={<Laptop />} />
        <Route exact path="/cameras" element={<MobileAccessories />} />
        <Route exact path="/headphones" element={<Headphones />} />
      </Routes>
      </div>
    </>
  );
};

export default Electronics;
