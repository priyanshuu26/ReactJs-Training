import React from 'react';
import Product from './Product';
import { items } from '../constants/items';

function ProductDisplay() {
  return (
    <div>
      {items.map((item) => (
        <Product title={item.name} cost={item.price} about={item.description} />
      ))}
    </div>
  );
}

export default ProductDisplay;
