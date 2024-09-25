import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { hitApi } from "../Services/hitApi";

const ProductForm = ({
  buttonName = "",
  onSubmit = () => {},
  Product = {},
  isLoading= false,
}) => {
  let [name, setName] = useState(Product?.name || "");
  let [quantity, setQuantity] = useState(Product?.quantity || "");
  let [price, setPrice] = useState(Product?.price || 0);
  let [featured, setFeatured] = useState(Product?.featured || "false");
  let [manufactureDate, setManufactureDate] = useState(
    Product?.manufactureDate || ""
  );
  let [productImage, setProductImage] = useState(Product?.productImage || "");
  let [company, setCompany] = useState(Product?.company || "");

  let companies = [
    { label: "Choose a company", value: "" },
    { label: "Apple", value: "apple" },
    { label: "Samsung", value: "samsung" },
    { label: "Xiaomi", value: "xiaomi" },
    { label: "Oneplus", value: "oneplus" },
    { label: "Asus", value: "asus" },
  ];

  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files
    let fileData = acceptedFiles[0];
    let data = new FormData();
    data.append("document", fileData);
    try {
      let result = await hitApi({
        url: `/file/single`,
        method: "POST",
        data: data,
      });
      setProductImage(result.data.result);
    } catch (error) {}
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    if (Product) {
      setName(Product?.name || "");
      setQuantity(Product?.quantity || 0);
      setPrice(Product?.price || 0);
      setFeatured(Product?.featured || false);
      setProductImage(Product?.productImage || "");
      setManufactureDate(Product?.manufactureDate || "");
      setCompany(Product?.company || "");
    }
  }, [Product]);

  let handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name ,
      quantity ,
      price ,
      featured ,
      manufactureDate ,
      productImage ,
      company ,
    };
    onSubmit(data)
  };

  return (
    <>
      <ToastContainer />
      <div className="outer_class">
        <div className="form_design">
          <form onSubmit={handleSubmit}>
            <br />
            <div>
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                className="form_attributes"
                name="name"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <br />
            <div>
              <label htmlFor="quantity">Quantity : </label>
              <input
                type="number"
                className="form_attributes"
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor="price">Price : </label>
              <input
                type="text"
                className="form_attributes"
                name="price"
                id="price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor="featured">Featured : </label>
              <input
                type="checkbox"
                className="form_attributes"
                name="featured"
                id="featured"
                checked={featured === true}
                onChange={(e) => {
                  setFeatured(e.target.checked);
                }}
              />
            </div>
            <br />

            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag and drop some files here, or click to select files</p>
              )}
              {productImage ? (
                <img
                  src={productImage}
                  alt="image is failed to show"
                  style={{ width: "200px", height: "100px" }}
                />
              ) : null}
            </div>

            <br />
            <div>
              <label htmlFor="manufactureDate"> Manufacture Date </label>
              <input
                type="date"
                className="form_attributes"
                name="manufactureDate"
                id="manufactureDate"
                value={manufactureDate}
                onChange={(e) => {
                  setManufactureDate(e.target.value);
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor="company">Company : </label>
              <select
                value={company}
                className="form_attributes"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              >
                {companies.map((value, index) => {
                  return (
                    <option key={index} value={value.value}>
                      {value.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <br />
            <div className="btn_class">
              <button type="submit" id="btn1">
               {isLoading ? 'Creating' : buttonName}
              </button>
            </div>
          </form>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default ProductForm;
