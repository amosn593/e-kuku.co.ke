import React from "react";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer bg-success w-100 mt-4">
      <div className="row bg-success w-100">
        <div className="col-md-3 mt-3"></div>
        <div className="col-md-6 text-center mt-3">
          <p className="text-center text-white ">
            {/* <Link className="text-white mx-1" to="/">
            Terms & Conditions
          </Link>
          <Link className="text-white mx-1" to="/">
            Privacy Policy
          </Link> */}
          </p>
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
