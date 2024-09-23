import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hitApi } from "../Services/hitApi";

const DisplaySpecificProduct = () => {
  let [productdata, setProductData] = useState("");

  let params = useParams();

  const getData = async () => {
    try {
      let result = await hitApi({
        url: `/newProduct/${params.id}`,
        method: "GET",
      });
      setProductData(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="specific_outer">
        <div className="specific_mid">
          <div className="specific_content">
            <img src={productdata.productImage} alt="" />
            <br />
            Name : {productdata.name}
            <br />
            Quantity : {productdata.quantity}
            <br />
            Price : {productdata.price}
            <br />
            Featured : {productdata.featured === true ? "Yes" : "False"}
            <br />
            ManufactureDate : {productdata.manufactureDate}
            <br />
            Companu : {productdata.company}

            <br />
            
            
            </div>
        </div>
      </div>
    </>
  );
};

export default DisplaySpecificProduct;
