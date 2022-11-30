import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, children, redirecrTo = "/" }) => {
  console.log(isAllowed);
  if (!isAllowed) {
    return <Navigate to={redirecrTo} />;
  }

  return children ? children : <Outlet />;
};
