import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Sell from "./Sell";
import Login from "../profile/Login";

function Sellbar() {
  const user = useSelector((state) => state.user);
  const loggedin = user.loggedin;
  const loggedout = user.loggedout;

  const history = useHistory();

  // console.log(name);

  if (loggedin & !loggedout) {
    return <Sell />;
  } else {
    return <Login />;;
  }
}

export default Sellbar;
