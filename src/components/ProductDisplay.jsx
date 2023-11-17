import React, { useState } from 'react';
import productList from '../constants/ProductList';

function ProductDisplay() {
  const [index, setIndex] = useState(0);
  const totalPageNumber = productList.length;
  const handleIncrement = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalPageNumber);
  };

  const handleDecrement = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + totalPageNumber) % totalPageNumber
    );
  };
  return (
    <div>
      <h1>Product's Name = {productList[index].name}</h1>
      <h3>Product's Category = {productList[index].category}</h3>
      <h5>Product's Price = {productList[index].price} $</h5>
      <div className="button">
        <button type="button" onClick={handleDecrement}>
          &lt;
        </button>
        <p>
          {index} of {totalPageNumber}
        </p>
        <button type="button" onClick={handleIncrement}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default ProductDisplay;
