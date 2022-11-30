import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, children, redirecrTo = "/" }) => {

  if (!isAllowed) {
    return <Navigate to={redirecrTo} />;
  }

  return children ? children : <Outlet />;
};
