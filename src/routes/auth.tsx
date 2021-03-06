import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { IState } from 'src/store/config';

const AuthRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const authenticated = useSelector((state: IState) => state.authReducer.authenticated);
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={props =>
        !authenticated ? <Component {...props} /> : <Redirect to="/dashboard" />}
    />
  );
}

export default AuthRoute;
