import React from "react";
import { Switch, Route, BrowserRouter, Router, Redirect } from "react-router-dom";
import Group from '../pages/investors/group';
import AllInvestors from "src/pages/investors/all.investors";


const InvestorsPageRoute: React.FC = (props: any) => (
  <>
    <Switch>
      <Route path="/investors/all" component={AllInvestors} exact />
      <Route path="/investors/group/:id" component={Group} exact />
      <Redirect to="/investors/all"/>
    </Switch>
  </>
);

export default InvestorsPageRoute;
