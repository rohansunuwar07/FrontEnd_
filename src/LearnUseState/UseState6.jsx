import { useState } from "react";

const UseState6 = () => {
  let [show, setShow] = useState("password");
  return (
    <div>
      <label htmlFor="password">Password : </label>
      <input type={show} />
      <button
        onClick={() => {
          show === "password" ? setShow("text") : setShow("password");
        }}
      >
        {show === "password" ? "show" : "hide"}
      </button>
    </div>
  );
};

export default UseState6;
