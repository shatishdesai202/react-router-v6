import React from "react";
import { useLocation, useNavigate } from "react-router";
import { isAuthenticated } from "../PrivateRouter";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = () => {
    localStorage.setItem("token", true);
    const auth = isAuthenticated();
    if (auth) {
      return navigate(from, { replace: true, state: location.state.cource });
    }
  };

  return (
    <div>
      <div onClick={() => handleLogIn()} className="btn btn-bg btn-success">
        Click Here For Login
      </div>
    </div>
  );
};

export default Login;
