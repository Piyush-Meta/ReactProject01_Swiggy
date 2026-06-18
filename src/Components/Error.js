import { useRouteError } from "react-router-dom";
const Error = () => {
    const arr = useRouteError();
    console.log("arr = ", arr);
  return (
    <div>
      
    </div>
  )
}

export default Error;
