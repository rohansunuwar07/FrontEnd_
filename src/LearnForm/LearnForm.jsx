const LearnForm = () => {
  let handleSubmit = (e) => {
    e.preventDefault;
    console.log("button is clicked");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name : </label>

        <input type="text" />

        <textarea name="" id=""></textarea>
        <label htmlFor="">Choose you country : </label>
        <select name="" id="">
          <option value="">nepal</option>
          <option value="">china</option>
          <option value="">usa</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LearnForm;
