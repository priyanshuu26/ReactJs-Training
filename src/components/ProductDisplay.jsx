import React from 'react';
import productList from '../constants/ProductList';

function ProductDisplay() {
  return (
    <div>
      {productList.map((data) => (
        <li key={data.id}>
          <h2>{data.name}</h2>
          <h3>catagory: {data.category}</h3>
          <h5>Price: {data.price}</h5>
        </li>
      ))}
    </div>
  );
}

export default ProductDisplay;
