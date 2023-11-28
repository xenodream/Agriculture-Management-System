import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Private = () => {
  const { loggedUser } = useSelector((state) => state.user);

  return loggedUser ? <Outlet /> : <Navigate to="/" replace />;
};

export default Private;
