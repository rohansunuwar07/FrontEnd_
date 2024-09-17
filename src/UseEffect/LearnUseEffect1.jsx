import { useEffect, useState } from "react";

const LearnUseEffect1 = () => {
  console.log("component runs successfully");

  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(100);

  useEffect(() => {
    console.log("useEffect runs successfully");
  }, [count1, count2]);

  //we can have multiple useEffect
  // If you miss array[] dependency, useEffect will run in every render

  return (
    <div>
      <div>Count1 is {count1} </div>
      <div>Count2 is {count2} </div>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Increment 1
      </button>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        Increment 2
      </button>
    </div>
  );
};

export default LearnUseEffect1;
