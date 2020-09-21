import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Group from '../pages/investor/group';
import AllInvestors from "src/pages/investor/all-investors";


const InvestorRoute: React.FC = () => (
  <>
    <Switch>
      <Route path="/investor/all" component={AllInvestors} exact />
      <Route path="/investor/group/:id" component={Group} exact />
      <Redirect to="/investors/all" />
    </Switch>
  </>
);

export default InvestorRoute;
