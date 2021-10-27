import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) return <Component {...props} />;
        if (isAuthenticated)
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
      }}
    />
  );
}

export default PublicRoute;
