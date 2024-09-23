import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { hitApi } from "../Services/hitApi";

const DisplayProduct = () => {
  let [productinfo, setProductInfo] = useState([]);

  let navigate = useNavigate();

  const getData = async () => {
    try {
      let result = await hitApi({
        url: `/newProduct`,
        method: "GET",
      });
      setProductInfo(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const handleView = (id) => {
    return () => {
      navigate(`/product/${id}`)
    }
    
  }
  
  const handleEdit = (id) => {
    return () => {
      navigate(`/product/update/${id}`)
    }
    
  }
  

  const handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `http://localhost:3001/newProduct /${id}`,
        method: "DELETE",
      });
      console.log(result.data.message);
      getData();
    } catch (error) {}
  };

  let deleteAlert = (id) => {
    Swal.fire({
      title: "Are you sure you want to Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed === true) {
        handleDelete(id);
      }
    });
  };

  return (
    <div>
      {productinfo.map((value, index) => {
        return (
          <div key={index} className="view_mode">
            <span>{index + 1}.</span>
            <div className="inside_view_mode">
              <img
                className="view_mode_item"
                src={value.productImage}
                alt="image is failed to show"
                style={{ width: "200px", height: "100px" }}
              />

              <div className="view_mode_item">Product Name : {value.name}</div>
              <div className="view_mode_item">Quantity : {value.quantity} </div>
              <div className="view_mode_item">Price : {value.price} </div>
              <div className="view_mode_item">
                Featured : {value.featured === true ? "True" : "False"}
              </div>
              <div className="view_mode_item">
                Manufactured Date : {value.manufactureDate}
              </div>
              <div className="view_mode_item">Company : {value.company} </div>
              <div style={{ margin: "5px" }}>
                <button
                  className="btn2"
                  onClick={handleView(value._id)}
                >
                  View
                </button>
                <button
                  className="btn2"
                  onClick={handleEdit(value._id)}
                >
                  Update
                </button>
                <button className="btn2"   onClick={() => {
                deleteAlert(value._id);
              }}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayProduct;
