import React, { useEffect, useState } from 'react';
import DrapDown from './DropDown';
import { Link } from 'react-router-dom';

const Main_Header = () => {
    return (
        <div>
            <div className=" shadow-lg d-flex justify-content-between mt-1" style={{ width: '100%' }}>
                 
                <div className="main-logo d-lg-flex align-items-center">
                    <img
                        src="assets/img/pnp.png"
                        style={{ height: '50px' }}
                        className='m-2'
                        alt="Logo"
                    />
                    
                </div>
                <div className='d-lg-flex align-items-center '>
                    <input type="text"  className='rounded' placeholder='search...' style={{width:'20rem'}}/>
                </div>

                <div className="m-2">
                <DrapDown/>
                </div>
            </div>
        </div>
    );
};

export default Main_Header;
