import { useEffect, useState } from "react";

const LearnUseEffect2 = () => {
  let [count, setCount] = useState(0);

  // useEffect runs in every render
  useEffect(() => {
    console.log("i am useEffect1");
  });

  //useEffect runs in first render only
  useEffect(() => {
    console.log("i am useEffect2");
  }, []);

  //It will run in first render, from the second render it will only render when count state value is changed.
  useEffect(() => {
    console.log("i am useEffect3");
  }, [count]);

  //How to add dependency array
  /* dependency array [] ma bahira ko variable matra rakhne, useEffect vitra ko ta render huda aafai chali halxa  */

  return <div>LearnUseEffect2</div>;
};

export default LearnUseEffect2;
