const SetLocalStorage = () => {
  //LocalStorage is the memory for a particular domain in particular browser.
  //All data in LocalStorage are string.
  //If browser is closed, LocalStorage data will persist in local.

  localStorage.setItem("name", "anish");
  localStorage.setItem("age", "50");

  return <div>SetLocalStorage</div>;
};

export default SetLocalStorage;
