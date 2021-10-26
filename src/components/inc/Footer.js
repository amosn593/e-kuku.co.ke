import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";

function Footer() {
  return (
    <div className="bg-success w-100">
      <div className="row bg-success w-100 py-4">
        <div className="col-md-3 mt-3">
          <div className="mx-1">
            <img
              src={Logo}
              alt="E-kuku Logo"
              className="d-inline-block align-text-top mylogo"
            />
            <p className="text-white ">
              <Link className="text-white mx-1" to="/about-e-kuku">
                About Us
              </Link>
            </p>
            <p className="text-white ">
              <Link className="text-white mx-1" to="/terms-and-conditions">
                Terms & Conditions
              </Link>
            </p>
            <p className="text-white ">
              <Link className="text-white mx-1" to="/privacy-policy">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="col-md-6 text-center mt-3">
          <p className="text-center text-white">
            &copy; {new Date().getFullYear()} E-KUKU | All Rights Reserved
          </p>
        </div>
        <div className="col-md-3 text-white mt-3">
          <p className="text-white mx-2">
            <i className="fa fa-envelope" aria-hidden="true">
              <span className="mx-2">info@e-kuku.co.ke</span>
            </i>
          </p>
          <p className="text-white mx-2">
            <i className="fa fa-envelope" aria-hidden="true">
              <span className="mx-2">support@e-kuku.co.ke</span>
            </i>
          </p>
          <p className="text-white mx-2">
            <i className="fa fa-phone-square" aria-hidden="true">
              <span className="mx-2">+254776464012</span>
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
