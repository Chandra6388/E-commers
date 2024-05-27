import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Component/Header/Header";
import Main_header from '../Component/Header/Main_header';
import ProductDetails from '../Layout/ProductDetails/ProductDetails'



const Client = () => {
    return (
        <>
            <div className="fixed-top">
                <Main_header className="bg-white border-bottom" />
                <Header className="bg-white border-bottom" />
            </div>

            <div className="pt-5" style={{ marginTop: '90px' }}>
                <Routes>
                <Route path="/product_details/:id" element={<ProductDetails />} />
                </Routes>
            </div>
        </>
    );
};

export default Client;
