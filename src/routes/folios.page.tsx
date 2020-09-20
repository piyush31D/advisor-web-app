import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AllInvestors from "src/pages/investors/all-investors";
import Folio from "src/pages/folios/folio";
import CreateTrades from "src/pages/folios/create-trades";
import EditFolio from "src/pages/folios/edit-folio";

const FoliosPageRoute: React.FC = (props: any) => (
	<>
		<Switch>
			<Route path="/folios/all" component={AllInvestors} exact />
			<Route path="/folios/:id" component={Folio} exact />
			<Route path="/folios/:id/create" component={CreateTrades} exact />
			<Route path="/folios/:id/edit" component={EditFolio} exact />
			<Redirect to="/folios/all" />
		</Switch>
	</>
);

export default FoliosPageRoute;
