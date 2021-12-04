import React from "react";
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";

const courceList = ["React", "Angular", "Vue", "Django"];

export const Cources = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        <Link to="/"> 🔙 Back To Home </Link> Cources
      </h1>

      {courceList.map((cource, index) => (
        <div
          onClick={() => {
            navigate(`/cources/${cource}`, { state: cource });
          }}
          key={index}
        >
          {cource}
        </div>
      ))}

      <NavLink
        style={({ isActive }) => (isActive ? { display: "none" } : undefined)}
        to="/cources/premium-cources"
      >
        Want Premium Cources(NavLink)
      </NavLink>

      <Outlet />
    </div>
  );
};

export default Cources;
