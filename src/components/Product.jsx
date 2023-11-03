import React from 'react';

function Product(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.cost}</h2>
      <h5>{props.about}</h5>
    </div>
  );
}

export default Product;
