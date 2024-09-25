import { useParams } from "react-router-dom";
import { useReadSpecificProductQuery } from "../Services/api/productService";

const ReadSpecificProductUsingRTK = () => {

    let params = useParams();

  let result = useReadSpecificProductQuery(params.id);
  // console.log(result?.data?.data)

  let product =  result?.data?.data || {};

  return (
    <>
      <div className="specific_outer">
        <div className="specific_mid">
          <div className="specific_content">
            <img src={product.productImage} alt="" />
            <br />
            Name : {product.name}
            <br />
            Quantity : {product.quantity}
            <br />
            Price : {product.price}
            <br />
            Featured : {product.featured === true ? "Yes" : "False"}
            <br />
            ManufactureDate : {product.manufactureDate}
            <br />
            Company : {product.company}

            <br />
            
            
            </div>
        </div>
      </div>
    </>
  );
};

export default ReadSpecificProductUsingRTK;
