import React from 'react';

const ProductDetails = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 mt-1 ">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="rounded-lg bg-gray-300 dark:bg-gray-700 mb-4" style={{ height: '400px' }}>
              <img className="w-100 h-100 object-cover rounded-lg" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
            </div>
            <div className="row">
              <div className="col-6 mb-2">
                <button className="btn btn-dark w-100 font-bold">Add to Cart</button>
              </div>
              <div className="col-6 mb-2">
                <button className="btn btn-secondary w-100 font-bold">Add to Wishlist</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="h4 font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="d-flex mb-4">
              <div className="me-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                <span className="text-gray-600 dark:text-gray-300 ms-2">$29.99</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                <span className="text-gray-600 dark:text-gray-300 ms-2">In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
              <div className="d-flex align-items-center mt-2">
                <button className="btn btn-secondary btn-circle me-2" style={{ backgroundColor: '#4b5563' }}></button>
                <button className="btn btn-secondary btn-circle me-2" style={{ backgroundColor: '#ef4444' }}></button>
                <button className="btn btn-secondary btn-circle me-2" style={{ backgroundColor: '#3b82f6' }}></button>
                <button className="btn btn-secondary btn-circle me-2" style={{ backgroundColor: '#f59e0b' }}></button>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
              <div className="d-flex align-items-center mt-2">
                <button className="btn btn-outline-secondary me-2">S</button>
                <button className="btn btn-outline-secondary me-2">M</button>
                <button className="btn btn-outline-secondary me-2">L</button>
                <button className="btn btn-outline-secondary me-2">XL</button>
                <button className="btn btn-outline-secondary me-2">XXL</button>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
