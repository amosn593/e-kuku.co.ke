import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-success w-100">
      <div className="row bg-success w-100 py-4">
        <div className="col-md-3 mt-3">
          <p className="text-center text-white ">
            <Link className="text-white mx-2" to="/terms-and-conditions">
              Terms & Conditions
            </Link>
            <Link className="text-white mx-2" to="/privacy-policy">
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="col-md-6 text-center mt-3">
          <p className="text-center text-white">
            &copy; {new Date().getFullYear()} E-KUKU | All Rights Reserved
          </p>
        </div>
        <div className="col-md-3 mt-3"></div>
      </div>
    </div>
  );
}

export default Footer;
