import * as React from "react";
import { Route, Switch, Redirect } from "react-router";
import GreekGod from "./containers/greekGodContainer/greekGod";
import Quiz from "./containers/quiz/quiz";

interface IQuizQuestions {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IProps {}

export interface IState {
  quizQuestions: IQuizQuestions | null;
}

class Routes extends React.Component<IProps, IState> {
  public state = { quizQuestions: null };
  componentDidMount() {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ quizQuestions: data.results });
      });
  }

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
