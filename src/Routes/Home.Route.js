import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Component/Header/Header";
import Main_header from '../Component/Header/Main_header';
import Mobile from "../Layout/electronics/Mobile";  
import HomePage from "../Layout/Home/HomePage";
import Laptop from "../Layout/electronics/Laptop";
import MobileAccessories from "../Layout/electronics/MobileAccessories";
import Headphones from "../Layout/electronics/Headphones";


const App = () => {
  return (
    <>
      <div className="fixed-top">
        <Main_header className="bg-white border-bottom" />
        <Header className="bg-white border-bottom" />
      </div>
     
      <div className="pt-5" style={{ marginTop: '90px' }}>
      <Routes>
      <Route exact path="/" element={<HomePage />} />
        <Route exact path="/electronics/mobiles" element={<Mobile />} />
        <Route exact path="/electronics/laptops" element={<Laptop />} />
        <Route exact path="/electronics/cameras" element={<MobileAccessories />} />
        <Route exact path="/electronics/headphones" element={<Headphones />} />
      </Routes>
      </div>







    </>
  );
};

export default App;
