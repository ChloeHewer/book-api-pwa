import * as React from "react";
import { Route, Switch, Redirect } from "react-router";
import GreekGod from "./src/containers/greekGodContainer/greekGod";

export interface IProps {}

export interface IState {}

class Routes extends React.Component<IProps, IState> {
  public render() {
    return (
      <Switch>
        <Route path="/(greekGod| )" exact={true} component={GreekGod} />
        <Redirect to="/greekGod" />
      </Switch>
    );
  }
}

export default Routes;
