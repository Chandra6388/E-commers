import React from 'react';
import { Category } from './Header.config'
import {ChevronDown , ChevronRight} from 'lucide-react'

const Header = () => {
    console.log(Category[0].name)
    return (
        <>
            <div style={{ height: "50px", backgroundColor: '#4287f5' }}>
                <div className='d-flex justify-content-center align-items-center h-100 gap-10'>
                   {Category.map((item , index)=>{
                    return <div className='d-flex' key={index}>
                        <h6 className='font-weight-bold'>{item.name}</h6>
                        {/* <ChevronDown/> */}
                        <ChevronRight/>
                    </div>
                   })}
 

                </div>


            </div>


        </>
    );
}

export default Header;
