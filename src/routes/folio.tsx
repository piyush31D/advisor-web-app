import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Folio from "src/pages/folio/folio";
import CreateTrades from "src/pages/folio/create-trades";
import EditFolio from "src/pages/folio/edit-folio";
import AllFolios from 'src/pages/folio/all-folios';

const FolioRoute: React.FC = () => (
  <>
    <Switch>
      <Route path="/folio/all" component={AllFolios} exact />
      <Route path="/folio/:id" component={Folio} exact />
      <Route path="/folio/:id/create" component={CreateTrades} exact />
      <Route path="/folio/:id/edit" component={EditFolio} exact />
      <Redirect to="/folio/all" />
    </Switch>
  </>
);

export default FolioRoute;
