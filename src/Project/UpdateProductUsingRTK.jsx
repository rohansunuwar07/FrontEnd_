import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { hitApi } from "../Services/hitApi";
import ProductForm from "./ProductForm";
import {
  useReadSpecificProductQuery,
  useUpdateProductMutation,
} from "../Services/api/productService";

const UpdateProductUsingRTK = () => {
  let [updateProduct, { isLoading, isSuccess, isError, error, data }] =
    useUpdateProductMutation();
  console.log(data);

  let params = useParams();

  let result = useReadSpecificProductQuery(params.id);
  let product = result?.data?.data || {};

  let navigate = useNavigate();

  let onSubmit = (body) => {
    updateProduct({ id: params.id, body: body });
    console.log(body)
    navigate(`/product/${params.id}`);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("success");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log(error.error);
    }
  }, [isError, error]);
  return (
    <>
      <ProductForm
        buttonName="Update Product"
        onSubmit={onSubmit}
        Product={product}
        isLoading={isLoading}
      />
    </>
  );
};

export default UpdateProductUsingRTK;
