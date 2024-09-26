import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteProductMutation,
  useReadProductQuery,
} from "../Services/api/productService";
import { useEffect, useState } from "react";

const ReadAllProductUsingRTK = () => {
  let [deleteId, setDeleteId] = useState("");

  let { isLoading: loadingData, data: readData } = useReadProductQuery();
  // console.log(result?.data?.data);

  let products = readData?.data || [];

  let navigate = useNavigate();

  const handleView = (id) => {
    return () => {
      navigate(`/product/${id}`);
    };
  };

  const handleEdit = (id) => {
    return () => {
      navigate(`/product/update/${id}`);
    };
  };

  let params = useParams();

  let [deleteProduct, { isLoading, isSuccess, isError, error, data }] =
    useDeleteProductMutation(params.id);

  console.log(data);

  // const handleDelete = async (id) => {
  //   try {
  //     let result = await axios({
  //       url: `http://localhost:3001/newProduct /${id}`,
  //       method: "DELETE",
  //     });
  //     console.log(result.data.message);
  //     getData();
  //   } catch (error) {}
  // };

  // let deleteAlert = (id) => {
  //   Swal.fire({
  //     title: "Are you sure you want to Delete?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed === true) {
  //       handleDelete(id);
  //     }
  //   });
  // };

  useEffect(() => {
    if (isSuccess) {
      console.log("Deleted");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log(error.error);
    }
  }, [isError, error]);

  return (
    <div>
      {loadingData || isLoading ? (
        <div style={{ fontSize: "60px" }}>Loading....</div>
      ) : (
        <div>
          {products.map((value, index) => {
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

                  <div className="view_mode_item">
                    Product Name : {value.name}
                  </div>
                  <div className="view_mode_item">
                    Quantity : {value.quantity}{" "}
                  </div>
                  <div className="view_mode_item">Price : {value.price} </div>
                  <div className="view_mode_item">
                    Featured : {value.featured === true ? "True" : "False"}
                  </div>
                  <div className="view_mode_item">
                    Manufactured Date : {value.manufactureDate}
                  </div>
                  <div className="view_mode_item">
                    Company : {value.company.toUpperCase()}{" "}
                  </div>
                  <div style={{ margin: "5px" }}>
                    <button className="btn2" onClick={handleView(value._id)}>
                      View
                    </button>
                    <button className="btn2" onClick={handleEdit(value._id)}>
                      Update
                    </button>
                    <button
                      className="btn2"
                      onClick={() => {
                        deleteProduct(value._id);
                        setDeleteId(value._id);
                      }}
                    >
                      {isLoading && value._id === deleteId
                        ? "Deleting..."
                        : "Delete"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ReadAllProductUsingRTK;
