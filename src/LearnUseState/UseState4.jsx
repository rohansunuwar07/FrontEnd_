import { useState } from "react";

const UseState4 = () => {
  let [show, setShow] = useState(true);
  return (
    <div>
      {show === true && <img src="./public/vite.svg" alt="image" />}

      {/* <button
        onClick={() => {
          if (show === true) {
            setShow(false);
          } else {
            setShow(true);
          }
        }}
      >
        {show === true ? "hide" : "show"}
      </button> */}

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show === true ? "hide" : "show"}
      </button>
    </div>
  );
};

export default UseState4;
