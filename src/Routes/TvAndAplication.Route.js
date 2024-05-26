import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Component/Header/Header";
import Main_header from '../Component/Header/Main_header';
import Tv from "../Layout/TvAndAplications/TVs";  
import Ac from "../Layout/TvAndAplications/AC";
import WashingMatching from "../Layout/TvAndAplications/WashingMachin";


const Electronics = () => {
  return (
    <>
      <div className="fixed-top">
        <Main_header className="bg-white border-bottom" />
        <Header className="bg-white border-bottom" />
      </div>
     
      <div className="pt-5" style={{ marginTop: '90px' }}>
      <Routes>
       
        <Route exact path="/tvs" element={<Tv />} />
        <Route exact path="/air-conditioners" element={<Ac />} />
        <Route exact path="/washing-machines" element={<WashingMatching />} />
      </Routes>
      </div>
    </>
  );
};

export default Electronics;
