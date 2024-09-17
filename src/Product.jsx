import { useNavigate } from "react-router-dom";

const Product = () => {
  let navigate = useNavigate();

  return (
    <>
      <div>Product</div>
      <button
        onClick={() => {
          navigate("/contact", { replace: true });
        }}
      >
        Goto contact
      </button>
    </>
  );
};

export default Product;
