const GetLocalStorage = () => {
  console.log(localStorage.getItem("name"));
  let age = localStorage.getItem("age");

  return <div>GetLocalStorage {age} </div>;
};

export default GetLocalStorage;
