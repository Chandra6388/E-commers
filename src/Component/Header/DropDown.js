import React from 'react';
import { ShoppingCart } from 'lucide-react';
import CartWithBadge from './CartWithBadge';

 

const DropDown = () => {
    const itemCount = 6;


    return (
        <div className='d-flex  mr-6 gap-5 mt-1'>
        
            {1 == 3 ? <button className='btn btn-primary'>Login</button> :
                <img src="assets/img/profile.png" style={{ borderRadius: '50%', height: '50px' }} alt="img" />
            }
            <CartWithBadge itemCount={itemCount} />

        </div>
    );
}

export default DropDown;
