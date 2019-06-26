import React, { useState, useRef, memo } from "react";

// function CountChildDemo() {
const CountChildDemo = memo(({ onOdd }) => {
  const [count, setCount] = useState(0);
  const renders = useRef(0);
  return (
    <div>
      <p>Count: {count}</p>
      <p>Renders: {renders.current++}</p>
      <button
        onClick={() => {
          if (count % 2 === 0) {
            onOdd();
          }
          setCount(c => c + 1);
        }}
      >
        Increment
      </button>
      {console.log(renders.current)}
    </div>
  );
});

export default CountChildDemo;
