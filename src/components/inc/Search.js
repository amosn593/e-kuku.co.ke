import React from "react";

function Search() {
  return (
    <div className="container-fluid py-3 btn-info">
      <div className="row py-3">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form className="form-inline d-flex">
            <input
              type="text"
              name="search-string"
              className="form-control"
              id="search-string"
              placeholder="Type your search here!!!"
            />

            <button type="submit" className="btn btn-primary mx-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Search;
