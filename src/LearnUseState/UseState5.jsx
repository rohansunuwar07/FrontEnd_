import { useState } from "react";

const UseState5 = () => {
  let [type, setType] = useState("password");
  return (
    <div>
      <div>
        <label htmlFor="password">Password : </label>
        <input type={type} />
        <button
          onClick={() => {
            if (type === "password") {
              setType("text");
            } else {
              setType("password");
            }
          }}
        >
          {type === "password" ? "show" : "hide"}
        </button>
      </div>
    </div>
  );
};

export default UseState5;
