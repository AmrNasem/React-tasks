import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleInc = () => setValue((prev) => prev + 1);
  const handleDec = () => setValue((prev) => prev - 1);
  return (
    <div>
      <button onClick={handleInc}>+</button>
      <span>{value}</span>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

export default Counter;
