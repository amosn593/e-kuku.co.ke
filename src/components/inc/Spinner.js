import React from "react";

function SPinner() {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <br />
      <h4 className="my-3">Loading...</h4>
    </div>
  );
}

export default SPinner;
