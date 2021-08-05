import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="row bg-success mx-0 mt-5 myfooter">
      <div className="col-md-12 text-center mt-3">
        <p className="text-center text-white ">
          <Link className="text-white mx-1" to="/">
            Terms & Conditions
          </Link>
          <Link className="text-white mx-1" to="/">
            Privacy Policy
          </Link>
        </p>
        <p className="text-center text-white">
          Copyright @2021 | amosndonga@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
