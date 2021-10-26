import React from 'react'
import { Route, Redirect } from "react-router-dom";

function Loggedin({ loggedin, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!loggedin) return <Component {...props} />;
        if (loggedin)
          return (
            <Redirect
              to={{ pathname: "/", state: { from: props.location } }}
            />
          );
      }}
    />
  );;
}

export default Loggedin
