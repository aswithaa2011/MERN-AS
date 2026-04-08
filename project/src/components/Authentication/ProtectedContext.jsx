import { Navigate } from "react-router-dom";

const ProtectedContext = ({ children }) => {
  const isAuth = localStorage.getItem("auth");
  const changeAuth = JSON.parse(isAuth)



  if (changeAuth.status !== true) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedContext;