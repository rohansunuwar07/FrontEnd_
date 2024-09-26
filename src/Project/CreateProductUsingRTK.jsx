import ProductForm from "./ProductForm";

import "react-toastify/dist/ReactToastify.css";
import { useCreateProductMutation } from "../Services/api/productService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CreateProductUsingRTK = () => {

  let [createProduct,{isLoading,isSuccess,isError,error,data}] = useCreateProductMutation();
  // console.log(data);
 

  let navigate = useNavigate();

useEffect(() => {
  if(isSuccess){
    console.log("success");
    navigate(`/product`);
  }
},[isSuccess]
)

useEffect(() => {
  if(isError){
    console.log(error.error)
  }
},[isError,error]
)

  let onSubmit =  (body) => {
    createProduct(body);
   
  };

  return (
    <div>
    
      <ProductForm buttonName="Create Product" onSubmit={onSubmit}  Product="" isLoading={isLoading} />
    </div>
  );
};

export default CreateProductUsingRTK;
