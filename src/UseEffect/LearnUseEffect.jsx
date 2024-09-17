//UseEffect function is a asynchronous function which will execute once all the code gets executed.

import { useEffect } from "react";

//It means it will execute once the dom is printed on the browser.

const LearnUseEffect = () => {
  useEffect(() => {
    console.log("a");
  });

  console.log("b");

  return <div>LearnUseEffect</div>;
};

export default LearnUseEffect;
