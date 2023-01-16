import React from "react";

const Button = ({ count }) => {
  return (
    <button onClick={() => setCount((count) => count + 1)}> {count} </button>
  );
};

export default Button;
