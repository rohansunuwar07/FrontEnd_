import { Outlet, Route, Routes } from "react-router-dom";

const NestedRouting = () => {
  return (
    <Routes>
      <Route path="a" element={<Outlet />}>
        <Route index element={<div>a page</div>}></Route>
        <Route path="a1" element={<Outlet />}>
          <Route index element={<div>a1 page</div>}></Route>
          <Route path="a2" element={<div>a2 page</div>}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default NestedRouting;
