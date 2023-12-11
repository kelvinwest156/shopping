// ShoppingCart.js

import React, { useState } from 'react';

const ShoppingCart = ({
  cart,
  removeFromCart,
  updateQuantity,
  applyDiscount,
  discountApplied,
  calculateTotal,
}) => {
  const [couponCode, setCouponCode] = useState('');

  return (
    <div className=' flex items-center justify-center'>
      <div className='font-sans'>
        <h2 className=" font-bold text-xl py-5">Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className=' my-4'>
              {item.name} - <span className=' text-purple-700'>${item.amount}</span> - Quantity: <span className=' text-green-600'>{item.quantity}</span>
              <button className=' border-2 border-pink-600 p-2 rounded-md mx-5 bg-pink-600 text-white' onClick={() => removeFromCart(item.id)}>Remove</button>
              <input className=' text-green-600 bg-purple-200 rounded-md p-2'
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
              />
            </li>
          ))}
        </ul>
        <div className=' my-10'>
          <label htmlFor="couponCode">Coupon Code:</label>
          <input className=' bg-purple-200 p-2 rounded-md mx-2 font-sans'
            type="text"
            id="couponCode"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button className=' border-2 border-pink-600 p-2 rounded-md mx-5 bg-pink-600 text-white' onClick={() => applyDiscount(couponCode)}>Apply Discount</button>
          {discountApplied && <p>Discount Applied: 10%</p>}
        </div>
        <p className=' pb-28'>Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
