import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, redirectPath, ...rest }) => {
  const { isLogin } = useSelector((state) => state.authState);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Redirect to={redirectPath} /> : <Component {...props} />
      }
    />
  );
};
export default PublicRoute;
