import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Product from "../Product";
import Contact from "../Contact";
import GetDynamicRoute from "../LearnDynamicRoute/GetDynamicRoute";
import GetQueryParams from "../LearnDynamicRoute/GetQueryParams";
import ErrorPage from "../ErrorPage";

const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home name={"Home Page"} number={9800011123}></Home>}
      ></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/contact" element={<Contact />}></Route>

      {/* This component will execute if the route is other than the defined route */}
      <Route path="*" element={<ErrorPage />}></Route>

      <Route
        path="/user/:id1/create/:id2"
        element={<GetDynamicRoute />}
      ></Route>

      <Route path="/user" element={<GetQueryParams />}></Route>
    </Routes>
  );
};

export default Routing;
