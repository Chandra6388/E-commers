import React, { useEffect, useState } from 'react';
// import DrapDown from './DrapDown';
import { Link } from 'react-router-dom';

const Main_Header = () => {


    return (
        <div>
            <div className=" shadow-lg d-flex justify-content-between" style={{ width: '100%' }}>
                 
                <div className="main-logo d-lg-flex align-items-center">
                    <img
                        src="assets/img/pnp.png"
                        style={{ height: '50px' }}
                        className='m-2'
                        alt="Logo"
                    />
                    
                </div>

                <div className="m-2">
                    <img src="assets/img/profile.png" style={{ borderRadius: '50%', height: '50px' }} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Main_Header;
