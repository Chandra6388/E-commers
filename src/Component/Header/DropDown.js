import React, { useState } from 'react';
import CartWithBadge from './CartWithBadge';
import { Link } from 'react-router-dom';



const DropDown = () => {
    const itemCount = 6;
    const [cart, setCart] = useState();

    const user_Details = JSON.parse(localStorage.getItem('user_Details'));



    return (
        <div className='d-flex  mr-6 gap-5 mt-1'>
            {user_Details && user_Details.Role == "USER" ?
                <>
                    <img src="assets/img/profile.png" style={{ borderRadius: '50%', height: '50px' }} alt="img" />
                    <CartWithBadge itemCount={itemCount} />
                </>

                : user_Details && user_Details.Role == "SHELLER" ?
                    <>
                        <img src="assets/img/profile.png" style={{ borderRadius: '50%', height: '50px' }} alt="img" />
                        <Link className='btn btn-primary' to={'/upload'}>Upload Product</Link>
                    </> :
                    <>
                    <Link className='btn btn-primary' to={'/login'}>Login</Link>
                    <Link className='btn btn-primary' to={'/register'}>Become a Sheller</Link>

                    </>
            }





        </div>
    );
}

export default DropDown;
