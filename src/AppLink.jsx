import { NavLink } from "react-router-dom";

const AppLink = () => {
  return (
    <div>
      <NavLink to="/" style={{ margin: "20px" }}>
        Home
      </NavLink>
      <NavLink to="/product" style={{ margin: "20px" }}>
        Product
      </NavLink>
      <NavLink to="/contact" style={{ margin: "20px" }}>
        Contact
      </NavLink>
    </div>
  );
};

export default AppLink;
