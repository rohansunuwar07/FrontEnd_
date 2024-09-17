const RemoveLocalStorage = () => {
  localStorage.removeItem("age");
  localStorage.removeItem("name");

  return <div>RemoveLocalStorage</div>;
};

export default RemoveLocalStorage;
