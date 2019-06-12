import * as React from "react";
import { Route, Switch, Redirect } from "react-router";
import GreekGod from "./containers/greekGodContainer/greekGod";
import Quiz from "./containers/quiz/quiz";

export interface IProps {}

export interface IState {}

class Routes extends React.Component<IProps, IState> {
  public render() {
    return (
      <Switch>
        <Route path="/(greekGod| )" exact={true} component={GreekGod} />
        <Route path="/quiz" component={Quiz} />
        <Redirect to="/greekGod" />
      </Switch>
    );
  }
}

export default Routes;
