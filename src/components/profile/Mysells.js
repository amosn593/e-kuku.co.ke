import React from "react";

function Mysells() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 text-center">image</div>
        <div className="col-md-4 text-center">description</div>
        <div className="col-md-4 text-center">
          <button className="btn btn-primary my-2">Sponsor Advert</button>
          <br />
          <button className="btn btn-info my-2">Update Advert</button>
          <br />
          <button className="btn btn-danger my-2">Delete Advert</button>
        </div>
      </div>
    </div>
  );
}

export default Mysells;
