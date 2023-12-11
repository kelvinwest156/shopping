// App.js

import React, { useState, useEffect } from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShppingCart';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', amount: 100 },
    { id: 2, name: 'Product 2', amount: 50 },
    { id: 3, name: 'Product 3', amount: 170 },
    { id: 4, name: 'Product 4', amount: 60 },
    { id: 5, name: 'Product 5', amount: 118 },
    { id: 6, name: 'Product 6', amount: 29 },
    { id: 7, name: 'Product 7', amount: 45 },
    { id: 8, name: 'Product 8', amount: 13 },
    { id: 9, name: 'Product 9', amount: 26 },
    { id: 10, name: 'Product 10', amount: 23 }
    // Add more products as needed
  ]);

  const [cart, setCart] = useState([]);
  const [discountApplied, setDiscountApplied] = useState(false);

  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Save cart data to local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    setCart([...cart, { ...selectedProduct, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const applyDiscount = (couponCode) => {
    if (couponCode === 'WEB3BRIDGECOHORTx') {
      setDiscountApplied(true);
    }
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.amount * item.quantity, 0);
    const discount = discountApplied ? subtotal * 0.1 : 0;
    return subtotal - discount;
  };

  return (
    <div className=' flex items-center mx-auto justify-center text-center'>
      <div>
        <h1 className=' text-4xl font-bold text-pink-600 p-20'>Shopping Cart</h1>
        <ProductList products={products} addToCart={addToCart}/>
        <ShoppingCart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          applyDiscount={applyDiscount}
          discountApplied={discountApplied}
          calculateTotal={calculateTotal}
        />
      </div>
    </div>
  );
};

export default App;
