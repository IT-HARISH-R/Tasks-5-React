import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="product p-4 border rounded-md shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h3 className="text-lg mt-2">{product.title}</h3>
      <p className="text-sm text-gray-500">${product.price}</p>
      <button 
        onClick={() => handleAddToCart(product)} 
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
