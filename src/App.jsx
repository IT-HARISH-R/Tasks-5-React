import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import CartModal from './Component/CartModal';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    } else {
      alert('Item already added to the cart');
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const openCartModal = () => {
    setIsModalOpen(true);
  };

  const closeCartModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Navbar cart={cart} openCartModal={openCartModal} />
      <div className="container mx-auto pt-40 products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>

      {isModalOpen && <CartModal cart={cart} handleRemoveFromCart={handleRemoveFromCart} closeCartModal={closeCartModal} />}
    </div>
  );
};

export default App;
