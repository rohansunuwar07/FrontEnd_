import { useSearchParams } from "react-router-dom";

const GetQueryParams = () => {
  let [query] = useSearchParams();

  let name = query.get("name");
  let age = query.get("age");

  return (
    <div>
      GetQueryParams <br />
      My name is {name} <br /> My age is {age}
    </div>
  );
};

export default GetQueryParams;
