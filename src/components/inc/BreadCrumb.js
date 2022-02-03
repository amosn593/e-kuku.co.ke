import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb(props) {
  const gt = ">";
  return (
    <div className="container mt-1 py-2">
      <h6>
        <Link className="breadCrumb" to="/">
          Home
        </Link>{" "}
        {gt} {props.title}
      </h6>
    </div>
  );
}

export default BreadCrumb;
