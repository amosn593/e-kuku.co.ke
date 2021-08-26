import React from "react";
import { useSelector } from "react-redux";
import Navloggedout from "./Navloggedout";
import Navloggedin from "./Navloggedin";

function Navbar() {
  const user = useSelector((state) => state.user);

  const loggedin = user.loggedin;
  const loggedout = user.loggedout;

  // console.log(name);

  if (loggedin & !loggedout) {
    return <Navloggedin />;
  } else {
    return <Navloggedout />;
  }
}

export default Navbar;
