/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import productList from '../constants/productList';
import { addItem } from './cartSlice';

function ProductDisplay() {
  const dispatch = useDispatch();

  return (
    <div>
      {productList.map((data) => (
        <li key={data.id}>
          <h2>{data.name}</h2>
          <h3>catagory: {data.category}</h3>
          <h5>Price: {data.price}</h5>
          <button type="button" onClick={() => dispatch(addItem(data))}>
            add
          </button>
        </li>
      ))}
    </div>
  );
}

export default ProductDisplay;
