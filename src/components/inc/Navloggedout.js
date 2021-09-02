import React from "react";
import { Link } from "react-router-dom";

function Navloggedout() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top shadow mynavbar">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex" to="/">
          <h4 className="m-1 ">E-KUKU</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item fs-5">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/eggs"
              >
                Eggs
              </Link>
            </li>
            <li className="nav-item fs-5">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/chicks"
              >
                Chicks
              </Link>
            </li>
            <li className="nav-item fs-5">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/chicken"
              >
                Chicken
              </Link>
            </li>
            <li className="nav-item fs-5">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/chicken_feeds"
              >
                Chicken Feeds
              </Link>
            </li>
            <li className="nav-item fs-5">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/poultry_structures"
              >
                Poultry Structures
              </Link>
            </li>
            <li className="nav-item fs-5">
              <Link
                className="nav-link btn-warning text-white  rounded-pill text-center mx-1"
                to="/sell"
              >
                SELL
              </Link>
            </li>
            <li className="nav-item fs-5">
              <Link
                className="nav-link btn-info text-white  rounded-pill text-center mx-1"
                to="/sign-in"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navloggedout;
