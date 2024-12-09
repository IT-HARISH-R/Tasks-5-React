import React from 'react';

const CartModal = ({ cart, handleRemoveFromCart, closeCartModal }) => {
  return (
    <div className="modal  fixed  top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center ">
      <div className="modal-content container mx-auto p-10 w-full bg-white  rounded-md h-full py-24 overflow-scroll">
        <div className="flex justify-between px-8 items-center text-2xl">

        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <button onClick={closeCartModal} className="text-red-500 mb-4">Close</button>
        </div>
        <div className="cart-items space-y-4">
          {cart.length === 0 ? (
            <p className='text-center pt-20 font-bold text-3xl'>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div className="product md:w-[700px] mx-auto p-4 border rounded-md shadow-md relative pt-8">
                <img src={item.image} alt={item.title} className="w-auto mx-auto h-48 object-fill" />
                <h3 className="text-lg mt-2">{item.title}</h3>
                <div className="flex items-center justify-between pb-10 ">
                  <p className="text-sm text-gray-500 py-4 md:py-8">${item.price}</p>
                  <p className='flex items-center gap-1'>{item.rating.rate}<span className="material-symbols-outlined">
                    star
                  </span></p>

                </div>
                <button 
                  onClick={() => handleRemoveFromCart(item.id)} 
                  className="bg-red-500 text-white px-2 py-1 rounded-md flex mx-auto">
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
