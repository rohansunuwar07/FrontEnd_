import { Outlet, Route, Routes } from "react-router-dom";
// import CreateProduct from "./Project/CreateProduct";
import CreateProductUsingRTK from "./Project/CreateProductUsingRTK";
import Footer from "./Project/Footer";
import Navbar from "./Project/Navbar";
import ReadAllProductUsingRTK from "./Project/ReadAllProductUsingRTK";
import ReadSpecificProductUsingRTK from "./Project/ReadSpecificProductUsingRTK";
import UpdateProduct from "./Project/UpdateProduct";
import CreateProduct from "./Project/CreateProduct";
import UpdateProductUsingRTK from "./Project/UpdateProductUsingRTK";

const Project = () => {
  // let infoData = useSelector((store) => store.info);
  // // console.log(infoData)

  // let dispatch = useDispatch();
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> <Outlet /> <Footer />{" "}
            </>
          }
        >
          <Route path="product" element={<Outlet />}>
            {/* <Route index element={<DisplayProduct />}></Route> */}
            <Route index element={<ReadAllProductUsingRTK />}></Route>
            {/* <Route path="create" element={<CreateProduct />}></Route> */}
            <Route path="create" element={<CreateProductUsingRTK />}></Route>
          
            <Route path=":id" element={<ReadSpecificProductUsingRTK />}></Route>
            {/* <Route path="update/:id" element={<UpdateProduct />}></Route> */}
            <Route path="update/:id" element={<UpdateProductUsingRTK />}></Route>
          </Route>
        </Route>
      </Routes>

      {/* <br />
      <div>{infoData.name}</div>
      <br />
      <div>{infoData.age}</div>
      <br />
      <div>{infoData.address}</div>

      <button
        onClick={() => {
          dispatch(changeName("Don"));
        }}
      >
        Change Name
      </button>
      <br /><br />
      <button
        onClick={() => {
          dispatch(changeAge(40));
        }}
      >
        Change Age
      </button>
      <br /><br />
      <button onClick={() => {
        dispatch(changeAddress(["Bardibas"," Province 2"]))
      }
      }>Change Address</button> */}
    </div>
  );
};

export default Project;
