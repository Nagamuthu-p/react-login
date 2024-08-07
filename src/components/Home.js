import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h2 className=" text-center">Welcome to the Auth App</h2>
      <div className="d-flex justify-content-center">
        <Link to="/login" className="btn btn-primary m-2">
          Login
        </Link>
        <Link to="/signup" className="btn btn-secondary m-2">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Home;
