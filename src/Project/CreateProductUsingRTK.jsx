import { useCreateProductMutation } from "../Services/api/productService";
import ProductForm from "./ProductForm";

const CreateProductUsingRTK = () => {
  const [createProduct] = useCreateProductMutation();

  const handleSubmit = async (productData) => {
    try {
     let result =  await createProduct(productData).unwrap();
      console.log(result)
      // Handle successful creation, e.g., show a success message or redirect
    } catch (err) {
      // Handle error, e.g., show an error message
      console.log("Failed to create product:", err);
    }
  };

  return (
    <div>
      <ProductForm
        buttonName="Create Product"
        onSubmit={handleSubmit}
        Product=""
      />
    </div>
  );
};

export default CreateProductUsingRTK;
