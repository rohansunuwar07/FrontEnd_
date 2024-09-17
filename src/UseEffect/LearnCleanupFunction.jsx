import { useEffect, useState } from "react";

const LearnCleanupFunction = () => {
  let [count, setCount] = useState(0);

  // Clean Up function is the function which is return by useEffect.
  // Clean Up function does not execute on first render (component mount), but from second render if useEffect execute, Clean Up function runs at first render then other code will run.

  // mount => show
  // unmount => hide

  useEffect(() => {
    console.log("i am useEffect");
    return () => {
      console.log("i am cleanup function");
    };
  }, [count]);

  return (
    <div>
      <div>Count is {count}</div>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default LearnCleanupFunction;
