import React from "react";
import { useSelector } from "react-redux";
import { Redirect, RouteProps } from "react-router-dom";
import { IState } from 'src/store/config';

const OnboardingRoute: React.ComponentType<RouteProps> = ({ children }) => {
  const authenticated = useSelector((state: IState) => state.authReducer.authenticated);
  const profileExists = useSelector((state: IState) => state.profileReducer.profileExists);
  return (
    <>
      {authenticated && !profileExists ? children : <Redirect to="/" />}
    </>
  )
};

export default OnboardingRoute;
