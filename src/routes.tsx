import * as React from "react";
import { Route, Switch, Redirect } from "react-router";
import BooksContainer from "./containers/bookContainer/books";

export interface IProps {}

export interface IState {}

class Routes extends React.Component<IProps, IState> {
  public render() {
    return (
      <Switch>
        <Route path="/ " exact={true} componenet={BooksContainer} />
        <Route path="/books" exact={true} component={BooksContainer} />
        <Redirect to="/books" />
      </Switch>
    );
  }
}

export default Routes;
