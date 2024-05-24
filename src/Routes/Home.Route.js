import React from 'react';
import { Route, Routes } from "react-router-dom";


// import Header from '../Components/Dashboard/Header/Header';
import MainHeader from '../Component/Header/Main_header';
import Header from '../Component/Header/Header';




const Home = () => {
    return (
        <>
            <MainHeader />
            <Header/>
         
            <div className="page-wrapper">
                {/* <Routes>
                    <Route exact path="/subadmin/add" element={<AddSubadmin />} />
                     
                </Routes> */}
            </div>
        </>
    )
}

export default Home
