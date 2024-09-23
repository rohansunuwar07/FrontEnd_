import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { hitApi } from "../Services/hitApi";
import ProductForm from "./ProductForm";


const UpdateProduct = () => {
    // let [name, setName] = useState("");
    // let [quantity, setQuantity] = useState("");
    // let [price, setPrice] = useState("");
    // let [featured, setFeatured] = useState(false);
    // let [manufactureDate, setManufactureDate] = useState("");
    // let [productImage, setProductImage] = useState("");
    // let [company, setCompany] = useState("");
  

    let [product, setProduct] = useState({});


    let params = useParams();

    let navigate = useNavigate();



    const getData = async () => {
      try {
        let result = await hitApi({
            url:`/newProduct/${params.id}`,
            method:'GET',
        });
        let data1 = result.data.data
       setProduct(data1);
      } catch (error) {
        
      }
    }
    useEffect(() => {
      getData();
    },[]
    )
    
  
    // const onDrop = useCallback(async(acceptedFiles) => {
    //   // Do something with the files
    //   let fileData = acceptedFiles[0];
    //   let data = new FormData();
    //   data.append("document", fileData);
    //   try {
    //     let result = await axios({
    //       url:`http://localhost:3001/file/single`,
    //       method:'POST',
    //       data:data
    //     });
    //     setProductImage(result.data.result);
    //   } catch (error) {
        
    //   }
    // }, []);
    // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  


    let onSubmit = async (data) => {
      try {
        let result = await hitApi({
          url: `/newProduct/${params.id}`,
          method: `PATCH`,
          data: data,
  
        });
       
        navigate(`/product/${params.id}`);
      } catch (error) {}
    };
  return (
    <>
     <ProductForm buttonName="Update Product" onSubmit={onSubmit} Product={product} />
    </>
  )
}

export default UpdateProduct