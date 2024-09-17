import { useState } from "react";

const UseState3 = () => {
  let [type, setType] = useState("password");
  return (
    <div>
      <div>
        <label htmlFor="password">Password : </label>
        <input type={type} />
        <button
          onClick={() => {
            setType("text");
          }}
        >
          Show
        </button>
        <button
          onClick={() => {
            setType("password");
          }}
        >
          Hide
        </button>
      </div>
    </div>
  );
};

export default UseState3;
