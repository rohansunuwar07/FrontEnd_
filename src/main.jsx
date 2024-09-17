import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Project from "./Project.jsx";
import './Project.css';

// import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  {/*  <App /> */} 
  <Project />
  </BrowserRouter>
);
