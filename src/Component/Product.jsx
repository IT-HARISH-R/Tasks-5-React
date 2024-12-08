import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="product p-4 border rounded-md shadow-md relative">
      <img src={product.image} alt={product.title} className="w-auto mx-auto h-48 object-fill" />
      <h3 className="text-lg mt-2">{product.title}</h3>
      <div className="flex items-center justify-between pb-10 ">
      <p className="text-sm text-gray-500 py-4 md:py-8">${product.price}</p>
      <p className='flex items-center gap-1'>{product.rating.rate}<span className="material-symbols-outlined">
star
</span></p>

      </div>
      
      <button 
        onClick={() => handleAddToCart(product)} 
        className="absolute bottom-[6%] left-[50%] translate-x-[-50%] mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
