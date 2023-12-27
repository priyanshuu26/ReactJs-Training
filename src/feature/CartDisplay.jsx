import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrement, increment, removeItem } from './cartSlice';

function CartDisplay() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.prod);
  const count = useSelector((state) => state.cart.value);
  const remove = (value) => {
    dispatch(removeItem(value));
  };
  const clear = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <hr />
      {items.map((item, index) => (
        <div className="cartCard">
          <li key={item.id}>
            <span>
              {item.name} : {item.category}
            </span>
          </li>
          <div className="quantity">
            <button type="button" onClick={() => dispatch(increment())}>
              +
            </button>
            {count}
            <button type="button" onClick={() => dispatch(decrement())}>
              -
            </button>
          </div>
          <button type="button" onClick={() => remove(index)}>
            remove
          </button>
        </div>
      ))}
      <hr />
      <button type="button" onClick={() => clear()}>
        Clear all
      </button>
    </div>
  );
}

export default CartDisplay;
