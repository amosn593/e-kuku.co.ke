import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";

function Navloggedin() {
  const user = useSelector((state) => state.user);

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
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-success dropdown-toggle nav-item fs-5 text-center loggedbtn"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  {user.email}
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
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={logoutuser}
                    >
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

export default Navloggedin;
