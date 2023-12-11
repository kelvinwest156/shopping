
// ProductList.js

import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2 className=" font-bold text-xl">Product List</h2>
      <ul className=' py-5'>
        {products.map((product) => (
          <li key={product.id} className=' p-3'>
            {product.name} - <span className=' text-purple-700'>${product.amount}</span>
            <button className=' border-2 border-pink-600 p-2 rounded-md mx-5 bg-pink-600 text-white' onClick={() => addToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
