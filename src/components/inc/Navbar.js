import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import Logo from "./images/logo.png";

function Navbar() {
  const { userloaded, isAuthenticated, userinfo } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const logoutuser = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow mynavbar">
      <div className="container-fluid">
        <Link className="navbar-brand lead d-flex mybrand" to="/">
          {/* <h4 className="m-1 lead ">E-KUKU</h4> */}
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
                to="/chicken_feeds"
              >
                Chicken Feeds
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn-success text-white rounded-pill text-center"
                to="/poultry_structures"
              >
                Poultry Equipments
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
            {!isAuthenticated && !userloaded && (
              <li className="nav-item">
                <Link
                  className="nav-link btn-signin text-white  rounded-pill text-center mx-1"
                  to="/sign-in"
                >
                  Sign In
                </Link>
              </li>
            )}
            {isAuthenticated && userloaded && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white rounded-pill text-center btn-success dropdown-toggle"
                  href="links"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Account
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-lg-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/my-sells">
                      My Adverts
                    </Link>
                    
                  </li>
                  <li>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logoutuser}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
