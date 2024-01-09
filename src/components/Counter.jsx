import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleInc = () => setValue((prev) => prev + 1);
  const handleDec = () => setValue((prev) => prev - 1);
  return (
    <div className="my-2">
      <button className="p-2 border" onClick={handleInc}>
        +
      </button>
      <span>{value}</span>
      <button className="p-2 border" onClick={handleDec}>
        -
      </button>
    </div>
  );
};

export default Counter;
