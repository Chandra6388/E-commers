import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Component/Header/Header";
import Main_header from '../Component/Header/Main_header';
import BabyCare from '../Layout/Kids/BabyCare'
import KidsAccessories from '../Layout/Kids/KidsAccessories'
import KidsFashion from '../Layout/Kids/KidsFashion'
import Toys from '../Layout/Kids/Toys'

const Kids = () => {
  return (
    <>
      <div className="fixed-top">
        <Main_header className="bg-white border-bottom" />
        <Header className="bg-white border-bottom" />
      </div>
      <div className="pt-5" style={{ marginTop: '90px' }}>
        <Routes>
          <Route exact path="/baby-care" element={<BabyCare />} />
          <Route exact path="/kids-accessories" element={<KidsAccessories />} />
          <Route exact path="/kids-fashion" element={<KidsFashion />} />
          <Route exact path="/toys" element={<Toys />} />
        </Routes>
      </div>
    </>
  );
};

export default Kids;
