import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AllPlans from 'src/pages/plan/all-plans'
import Plan from "src/pages/plan/plan";

const PlanPageRoute: React.FC = () => (
  <>
    <Switch>
      <Route path="/plan/all" component={AllPlans} exact />
      <Route path="/plan/:id" component={Plan} exact />
      <Redirect to="/plan/all" />
    </Switch>
  </>
);

export default PlanPageRoute;
