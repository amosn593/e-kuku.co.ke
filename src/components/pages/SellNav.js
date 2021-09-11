import React from "react";
import { useSelector } from "react-redux";
import Sell from "./Sell";
import Login from "../profile/Login";

function SellNav() {
  const user = useSelector((state) => state.user);

  const authenticated = user.isAuthenticated;
  const loaded = user.userloaded;

  if (!authenticated && !loaded) {
    return <Login />;
  } else {
    return <Sell />;
  }
}

export default SellNav;
