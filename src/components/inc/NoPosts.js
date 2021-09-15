import React from "react";
import Search from "./Search";

function NoPosts() {
  return (
    <div>
      <Search />
      <h6 className="text-muted text-center mt-4">
        No Products Found, try again later
      </h6>
    </div>
  );
}

export default NoPosts;
