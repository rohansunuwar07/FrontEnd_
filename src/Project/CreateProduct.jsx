import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProduct = () => {
  let [name, setName] = useState("");
  let [quantity, setQuantity] = useState("");
  let [price, setPrice] = useState("");
  let [featured, seFeatured] = useState(false);
  let [manufactureDate, setManufactureDate] = useState("");
  let [productImage, setProductImage] = useState("");
  let [company, setCompany] = useState("");

  let companies = [
    { label: "Company", value: "company" },
    { label: "Apple", value: "apple" },
    { label: "Samsung", value: "samsung" },
    { label: "Xiaomi", value: "xiaomi" },
    { label: "Oneplus", value: "oneplus" },
    { label: "Asus", value: "asus" },
  ];

  let handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      quantity: quantity,
      price: price,
      featured: featured,
      manufactureDate: manufactureDate,
      productImage: productImage,
      company: company,
    };
    try {
      let result = await axios({
        url: `http://localhost:3001/newProduct`,
        method: `POST`,
        data: data,
      });
      toast.success(result.data.message);
      setName("");
      setQuantity();
      setPrice();
      seFeatured(false);
      setManufactureDate("");
      setProductImage("");
      setCompany("");
    } catch (error) {}
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
                  seFeatured(e.target.checked);
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor="productImage">ProductImage : </label>
              <input
                type="text"
                className="form_attributes"
                name="productImage"
                id="productImage"
                value={productImage}
                onChange={(e) => {
                  setProductImage(e.target.value);
                }}
              />
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
                Create
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

export default CreateProduct;
