import * as React from "react";
import { fetchQuiz, IQuiz } from "../../reducers/quiz/quizReducer";
import { IStore } from "../../reducers";
import { connect } from "react-redux";

export interface IOwnProps {}

export interface IStateProps {
  quiz: IQuiz[];
  fetchQuiz: () => void;
}

export interface IState {}

class Quiz extends React.Component<IOwnProps & IStateProps, IState> {
  public componentDidMount = () => {
    this.props.fetchQuiz();
  };

  render() {
    return <section>{this.props.quiz[0].question}</section>;
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {
    quiz: state.quiz.quiz
  };
};

const mapDispatchToProps = {
  fetchQuiz
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
