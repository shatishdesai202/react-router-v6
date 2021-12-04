import React from "react";
import { Route, Navigate, useLocation, useNavigate } from "react-router-dom";

export function isAuthenticated() {
  const Token = localStorage.getItem("token");
  if (Token) {
    return true;
  } else {
    return false;
  }
}

export const PrivateRouter = ({ children, ...rest }) => {
  const isAuth = isAuthenticated();
  const location = useLocation();
  const navigate = useNavigate();

  if (!isAuth) {
    return (
      <Navigate
        to="/login"
        state={{ from: location, cource: location.state }}
      />
    );
  }

  return children;
};

export default PrivateRouter;
