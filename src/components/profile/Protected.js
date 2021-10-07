import React from "react";
import { Route, Redirect } from "react-router-dom";

function Protected({ isAuthenticated, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) return <Component {...props} />;
        if (!isAuthenticated)
          return (
            <Redirect
              to={{ pathname: "/sign-in", state: { from: props.location } }}
            />
          );
      }}
    />
  );
}

export default Protected;
