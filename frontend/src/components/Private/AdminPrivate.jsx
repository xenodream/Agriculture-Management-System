import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminPrivate = () => {
  const { loggedUser } = useSelector((state) => state.user);

  return loggedUser.id == 15 ? <Outlet /> : <Navigate to="/" replace />;
};

export default AdminPrivate;
