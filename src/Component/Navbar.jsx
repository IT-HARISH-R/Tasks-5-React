import React from 'react';

const Navbar = ({ cart, openCartModal }) => {
  return (
    <nav className="fixed w-full z-50 shadow-lg bg-gray-800">
     <div className="container mx-auto  text-white p-4 flex justify-between items-center">

      <h1 className="text-lg">Product Store</h1>
      <button onClick={openCartModal} className="bg-blue-500 px-4 py-2 rounded-md">
        Cart ({cart.length})
      </button>
     </div>
    </nav>
  );
};

export default Navbar;
