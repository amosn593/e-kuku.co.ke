import React, { useState } from "react";
import { useHistory } from "react-router";

function Search() {
  const [search, setSearch] = useState("");

  const history = useHistory();

  const post = async (e) => {
    e.preventDefault();
    history.push(`/poultry_search/${search}`);
    setSearch("");
  };
  return (
    <div className="container-fluid py-3 search-bg">
      <div className="row py-3">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h6 className="text-center my-2 py-3 search-header">
            For all your poultry needs in Kenya!!!
          </h6>
          <form className="form-inline d-flex" onSubmit={post}>
            <input
              type="text"
              name="search-string"
              className="form-control"
              id="search-string"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Type your search here!!!"
              required
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
