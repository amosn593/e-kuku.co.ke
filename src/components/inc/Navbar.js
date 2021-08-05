import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow ">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex fw-bold fs-4" to="/">
          <h4 className="m-1 ">ProfitablePoultry</h4>
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
            <li className="nav-item fs-4">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/eggs"
              >
                Eggs
              </Link>
            </li>
            <li className="nav-item fs-4">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/chicks"
              >
                Chicks
              </Link>
            </li>
            <li className="nav-item fs-4">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/chicken"
              >
                Chicken
              </Link>
            </li>
            <li className="nav-item fs-4">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/chicken_feeds"
              >
                Chicken Feeds
              </Link>
            </li>
            <li className="nav-item fs-4">
              <Link
                className="nav-link btn-warning text-white  rounded-pill text-center mx-1"
                to="/sell"
              >
                SELL
              </Link>
            </li>
            <li className="nav-item fs-4">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-success dropdown-toggle nav-item fs-4"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  Account
                </button>
                <ul className="dropdown-menu dropdown-menu-lg-end">
                  <li>
                    <button className="dropdown-item" type="button">
                      My Sells
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Profile
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
