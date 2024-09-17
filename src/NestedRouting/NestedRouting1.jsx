import { Outlet, Route, Routes } from "react-router-dom";

const NestedRouting1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<div>home page</div>}></Route>
        <Route path="student" element={<Outlet />}>
          <Route index element={<div>student page</div>}></Route>
          <Route path="1" element={<div>1 page</div>}></Route>
          <Route path="ram" element={<Outlet />}>
            <Route index element={<div>ram page</div>}></Route>
            <Route path=":id" element={<div>dynamic page</div>}></Route>
          </Route>
        </Route>
        <Route path="*" element={<div>404 page</div>}></Route>
      </Route>
    </Routes>
  );
};

export default NestedRouting1;
