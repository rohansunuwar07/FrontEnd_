import { toast, ToastContainer } from "react-toastify";
import { hitApi } from "../Services/hitApi";
import ProductForm from "./ProductForm";

import "react-toastify/dist/ReactToastify.css";

const CreateProduct = () => {
 
  let onSubmit = async (data) => {
    try {
      let result = await hitApi({
        url: `/newProduct`,
        method: `POST`,
        data: data,

      });
     toast.success(result.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      <ProductForm buttonName="Create Product" onSubmit={onSubmit}  Product="" />
    </div>
  );
};

export default CreateProduct;
