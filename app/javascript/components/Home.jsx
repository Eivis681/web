import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Food Recipes</h1>
        <p className="lead">
          A curated list of recipes for the best homemade meal and delicacies. If you register to our app you can add your own recipes. 
        </p>
        <hr className="my-4" />
        <Link
          to="/notLog"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Recipes
        </Link>
        <hr className="my-4" />
        <Link
          to="/login"
          className="btn btn-lg custom-button"
          role="button"
        >
          Login
        </Link>
        <hr className="my-4" />
        <Link
          to="/register"
          className="btn btn-lg custom-button"
          role="button"
        >
          Register
        </Link>
      </div>
    </div>
  </div>
);