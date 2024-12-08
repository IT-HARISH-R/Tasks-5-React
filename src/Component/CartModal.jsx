import React from 'react';

const CartModal = ({ cart, handleRemoveFromCart, closeCartModal }) => {
  return (
    <div className="modal fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="modal-content bg-white p-6 rounded-md w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <button onClick={closeCartModal} className="text-red-500 mb-4">Close</button>
        <div className="cart-items space-y-4">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                  <h4>{item.title}</h4>
                </div>
                <button 
                  onClick={() => handleRemoveFromCart(item.id)} 
                  className="bg-red-500 text-white px-2 py-1 rounded-md">
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
