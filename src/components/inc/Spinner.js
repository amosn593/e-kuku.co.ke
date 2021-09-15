import React from "react";
import Search from "./Search";

function SPinner() {
  return (
    <div>
      <Search />
      <div className="d-flex justify-content-center mt-3">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <br />
        <h4 className="my-3">Loading...</h4>
      </div>
    </div>
  );
}

export default SPinner;
