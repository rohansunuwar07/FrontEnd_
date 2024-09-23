import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./Project.css";
import Project from "./Project.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

// import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {/*  <App /> */}
      <Project />
    </BrowserRouter>
  </Provider>
);
