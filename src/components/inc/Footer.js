import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="w-100 footer-divs">
      <div className="row w-100 py-3 footer-divs">
        <div className="col-md-3 text-center mt-2 footer-divs">
          <div className="mx-1">
            <img
              src={Logo}
              alt="E-kuku Logo"
              className="d-inline-block align-text-top mylogo"
            />
            <p className="text-white my-1 py-1">
              <Link className="text-white mx-1 footer-links" to="/about-e-kuku">
                About Us
              </Link>
            </p>
            <p className="text-white my-1 py-1">
              <Link
                className="text-white mx-1 footer-links"
                to="/terms-and-conditions"
              >
                Terms & Conditions
              </Link>
            </p>
            <p className="text-white my-1 py-1">
              <Link
                className="text-white mx-1 footer-links"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="col-md-6 text-center mt-2 d-block">
          <h5 className="text-center text-white my-2 py-3">Our Products</h5>
          <p className="text-white my-1 py-1">
            <Link className="text-white mx-1 footer-links" to="/">
              Home
            </Link>
          </p>
          <p className="text-white my-1 py-1">
            <Link className="text-white mx-1 footer-links" to="/eggs">
              Eggs
            </Link>
          </p>

          <p className="text-white my-1 py-1">
            <Link className="text-white mx-2 footer-links" to="/chicks">
              Chicks
            </Link>
          </p>
          <p className="text-white my-1 py-1">
            <Link className="text-white mx-2 footer-links" to="/chicken">
              Chicken
            </Link>
          </p>
          <p className="text-white my-1 py-1">
            <Link className="text-white mx-2 footer-links" to="/feeds-medicine">
              Feeds & Medicine
            </Link>
          </p>
          <p className="text-white my-1 py-1">
            <Link
              className="text-white mx-2 footer-links"
              to="/poultry-facilities"
            >
              Poultry Facilities
            </Link>
          </p>
        </div>
        <div className="col-md-3 text-center text-white mt-3">
          <h5 className="text-center my-2 py-3">Contact Us</h5>
          <p className="text-white mx-2 my-1 py-1">
            <i className="fa fa-envelope" aria-hidden="true">
              <span className="mx-2">info@e-kuku.co.ke</span>
            </i>
          </p>
          <p className="text-white mx-2 my-1 py-1">
            <i className="fa fa-envelope" aria-hidden="true">
              <span className="mx-2">support@e-kuku.co.ke</span>
            </i>
          </p>
          <p className="text-white mx-2 my-1 py-1">
            <i className="fa fa-phone-square" aria-hidden="true">
              <span className="mx-2">+254776464012</span>
            </i>
          </p>
        </div>
      </div>
      <div className="row w-100 py-2 footer-divs">
        <div className="col-md-12 text-center">
          <p className="text-center text-white">
            &copy; {new Date().getFullYear()} E-KUKU | All Rights Reserved
          </p>
          <p className="text-center text-white">
            E-KUKU is a product of AMOS ICT SERVICES Ltd
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
