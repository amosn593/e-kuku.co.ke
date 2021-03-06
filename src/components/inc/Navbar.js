import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import Logo from "../assets/logo.png";

function Navbar() {
  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const history = useHistory();

  const logoutuser = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow mynavbar ">
      <div className="container-fluid">
        <Link className="navbar-brand lead d-flex mybrand" to="/">
          <img
            src={Logo}
            alt="E-kuku Logo"
            className="d-inline-block align-text-top mylogo"
          />
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
            <li className="nav-item">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/eggs"
              >
                Eggs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/chicks"
              >
                Chicks
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/chicken"
              >
                Chicken
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/feeds-medicine"
              >
                Feeds & Medicines
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/poultry-facilities"
              >
                Poultry Facilities
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn-warning btn-sell text-white  rounded-pill text-center mx-1"
                to="/sell"
              >
                SELL
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-white rounded-pill text-center btn-success dropdown-toggle"
                href="links"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-user px-1" aria-hidden="true"></i> Account
              </a>
              <ul
                className="dropdown-menu dropdown-menu-lg-end"
                aria-labelledby="navbarDropdown"
              >
                {isAuthenticated ? (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/my-sells">
                        <i className="fa fa-th px-1" aria-hidden="true"></i> My
                        Adverts
                      </Link>
                    </li>
                    <li></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={logoutuser}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/sign-in">
                        <p className="btn btn-danger w-100"> Log In</p>
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sign-up">
                        <p className="btn btn-secondary w-100">Register</p>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
