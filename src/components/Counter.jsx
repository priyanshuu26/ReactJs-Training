import React, { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);
  return (
    <>
      <button type="button" onClick={() => setValue(value + 1)}>
        +1
      </button>
      <button type="button" onClick={() => setValue(value - 1)}>
        -1
      </button>
    </>
  );
}

export default Counter;
