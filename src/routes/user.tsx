import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { IState } from 'src/store/config';

const UserRoute: React.ComponentType<RouteProps> = ({ children }) => {
  const authenticated = useSelector((state: IState) => state.authReducer.authenticated);
  return (
    <>
      {authenticated ? children : <Redirect to="/" />}
    </>
  )
};

export default UserRoute;
