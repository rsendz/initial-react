import { Navigate, Outlet } from "react-router-dom";

const ConditionalRoute = ({ condition, redirectTo }) => {
  if (!condition) {
    return <Navigate to={redirectTo} />;
  } else {
    return <Outlet />;
  }
};

export default ConditionalRoute;
