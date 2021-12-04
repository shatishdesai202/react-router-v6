import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

export const CourceDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h1>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/cources")}
        >
          🔙 Back To Home
        </span>
        Cource : {location && location.state}
      </h1>

      <span
        onClick={() =>
          navigate(`/cources/${location.state}/premium`, {
            state: location.state,
          })
        }
        className="btn btn-bg btn-secondary"
      >
        See Premium Cource Detail
      </span>
      <Outlet />
    </div>
  );
};

export default CourceDetail;
