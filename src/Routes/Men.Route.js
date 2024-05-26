import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Component/Header/Header";
import Main_header from '../Component/Header/Main_header';
import Cloths from '../Layout/Men/Cloths'
import Footwear from '../Layout/Men/Footwear'
import Wallets from '../Layout/Men/Wallets'
import Watches from '../Layout/Men/Watches'






const Men = () => {
  return (
    <>
      <div className="fixed-top">
        <Main_header className="bg-white border-bottom" />
        <Header className="bg-white border-bottom" />
      </div>
      <div className="pt-5" style={{ marginTop: '90px' }}>
      <Routes>
        <Route exact path="/Cloths" element={<Cloths />} />
        <Route exact path="/footwear" element={<Footwear />} />
        <Route exact path="/wallets-belts" element={<Wallets />} />
        <Route exact path="/watches" element={<Watches />} />
      </Routes>
      </div>
    </>
  );
};

export default Men;
