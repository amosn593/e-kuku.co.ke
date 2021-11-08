import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";

function Footer() {
  return (
    <div className="bg-success w-100">
      <div className="row bg-success w-100 py-4">
        <div className="col-md-3 text-center mt-3">
          <div className="mx-1">
            <img
              src={Logo}
              alt="E-kuku Logo"
              className="d-inline-block align-text-top mylogo"
            />
            <p className="text-white my-3 py-3">
              <Link className="text-white mx-1 footer-links" to="/about-e-kuku">
                About Us
              </Link>
            </p>
            <p className="text-white my-3 py-3">
              <Link
                className="text-white mx-1 footer-links"
                to="/terms-and-conditions"
              >
                Terms & Conditions
              </Link>
            </p>
            <p className="text-white my-3 py-3">
              <Link
                className="text-white mx-1 footer-links"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="col-md-6 text-center mt-3 d-block">
          <h6 className="text-center text-white my-2 py-2">Our Products</h6>
          <p className="text-white my-3 py-3">
            <Link className="text-white mx-2 footer-links" to="/eggs">
              Eggs
            </Link>
          </p>

          <p className="text-white my-3 py-3">
            <Link className="text-white mx-2 footer-links" to="/chicks">
              Chicks
            </Link>
          </p>
          <p className="text-white my-3 py-3">
            <Link className="text-white mx-2 footer-links" to="/chicken">
              Chicken
            </Link>
          </p>
          <p className="text-white my-3 py-3">
            <Link className="text-white mx-2 footer-links" to="/feeds-medicine">
              Feeds & Medicine
            </Link>
          </p>
          <p className="text-white my-3 py-3">
            <Link
              className="text-white mx-2 footer-links"
              to="/poultry-facilities"
            >
              Poultry Facilities
            </Link>
          </p>
        </div>
        <div className="col-md-3 text-center text-white mt-3">
          <h6 className="text-center my-2 py-2">Contact Us</h6>
          <p className="text-white mx-2 my-3 py-3">
            <i className="fa fa-envelope" aria-hidden="true">
              <span className="mx-2">info@e-kuku.co.ke</span>
            </i>
          </p>
          <p className="text-white mx-2 my-3 py-3">
            <i className="fa fa-envelope" aria-hidden="true">
              <span className="mx-2">support@e-kuku.co.ke</span>
            </i>
          </p>
          <p className="text-white mx-2 my-3 py-3">
            <i className="fa fa-phone-square" aria-hidden="true">
              <span className="mx-2">+254776464012</span>
            </i>
          </p>
        </div>
      </div>
      <div className="row bg-success w-100 py-4">
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
