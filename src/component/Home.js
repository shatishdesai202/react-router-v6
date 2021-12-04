import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1> Home Component </h1>
      <Link className="btn btn-success" to="/cources">
        Cources
      </Link>
    </div>
  );
};

export default Home;
