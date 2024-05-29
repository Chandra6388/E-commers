import React from 'react';

const CartWithBadge = ({ itemCount }) => {
    return (
      <div className="relative inline-flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-shopping-cart text-blue-600"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a1 1 0 0 0 1 .86h9.72a1 1 0 0 0 1-.76l3.38-11.6H5.21"></path>
        </svg>
        {itemCount > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full px-2 py-1 text-xs font-bold">
            {itemCount > 99 ? '99+' : itemCount}
          </span>
        )}
      </div>
    );
  };

export default CartWithBadge;
