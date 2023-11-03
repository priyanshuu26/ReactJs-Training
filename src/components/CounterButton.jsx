import React, { useState } from 'react';

function CounterButton() {
  const [value, setValue] = useState(0);
  return (
    <>
      <h3>Counter Button</h3>
      <p>
        <button onClick={() => setValue(value + 1)} style={{ margin: '20px' }}>
          +1
        </button>

        {value}
        <button onClick={() => setValue(value - 1)} style={{ margin: '20px' }}>
          -1
        </button>
      </p>
    </>
  );
}

export default CounterButton;
