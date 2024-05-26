import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Component/Header/Header";
import Main_header from '../Component/Header/Main_header';
import Furniture from '../Layout/Furniture/Furniture'
import BathroomAndSaniary from '../Layout/Furniture/BathroomAndSanitary'
import HomeDecor from '../Layout/Furniture/HomeDecor'
import Kitchen from '../Layout/Furniture/KitchenAndDining'

const FurnitureRoutes = () => {
  return (
    <>
      <div className="fixed-top">
        <Main_header className="bg-white border-bottom" />
        <Header className="bg-white border-bottom" />
      </div>
      <div className="pt-5" style={{ marginTop: '90px' }}>
        <Routes>
          <Route exact path="/furnitures" element={<Furniture />} />
          <Route exact path="/bathroom-sanitary" element={<BathroomAndSaniary />} />
          <Route exact path="/home-decor" element={<HomeDecor />} />
          <Route exact path="/kitchen-dining" element={<Kitchen />} />
        </Routes>
      </div>
    </>
  );
};

export default FurnitureRoutes;
