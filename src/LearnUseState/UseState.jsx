import { useState } from "react";

const UseState = () => {
  let [count, setCount] = useState(0);
  //Component will render if state variable is changed.
  console.log("i am useState");

  return (
    <div>
      <div> Count is {count} </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseState;
