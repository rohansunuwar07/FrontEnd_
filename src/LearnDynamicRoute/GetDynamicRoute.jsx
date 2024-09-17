import { useParams } from "react-router-dom";

const GetDynamicRoute = () => {
  //useParams

  let params = useParams();

  return (
    <div>
      GetDynamicRoute <br />
      {params.id1} <br />
      {params.id2}
    </div>
  );
};

export default GetDynamicRoute;
