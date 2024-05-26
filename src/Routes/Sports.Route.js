import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Component/Header/Header";
import Main_header from '../Component/Header/Main_header';

import Fitness from '../Layout/Sports/FitnessAccessories'
import OutdoorAndTravel from '../Layout/Sports/OutdoorAndTravel'
import SportCloth from '../Layout/Sports/SportsClothing'
import Shoes from '../Layout/Sports/SportsShoes'


const Sports = () => {
  return (
    <>
      <div className="fixed-top">
        <Main_header className="bg-white border-bottom" />
        <Header className="bg-white border-bottom" />
      </div>
      <div className="pt-5" style={{ marginTop: '90px' }}>
        <Routes>
          <Route exact path="/fitness-accessories" element={<Fitness />} />
          <Route exact path="/outdoor-travel" element={<OutdoorAndTravel />} />
          <Route exact path="/sports-clothing" element={<SportCloth />} />
          <Route exact path="/shoes" element={<Shoes />} />

        </Routes>
      </div>
    </>
  );
};

export default Sports;
