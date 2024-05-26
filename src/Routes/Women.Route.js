import React from 'react';
import { Route, Routes } from "react-router-dom";

import Header from "../Component/Header/Header";
import Main_header from '../Component/Header/Main_header';
import Cloths from '../Layout/Women/Cloths'
import Footwear from '../Layout/Women/Footwear'
import Watched from '../Layout/Women/Watches'

const Women = () => {
    return (
        <>
            <div className="fixed-top">
                <Main_header className="bg-white border-bottom" />
                <Header className="bg-white border-bottom" />
            </div>
            <div className="pt-5" style={{ marginTop: '90px' }}>
                <Routes>
                    <Route exact path="/clothing" element={<Cloths />} />
                    <Route exact path="/footwear" element={<Footwear />} />
                    <Route exact path="/watches" element={<Watched />} />
                </Routes>
            </div>
        </>
    );
}

export default Women;
