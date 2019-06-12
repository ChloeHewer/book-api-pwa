import { combineReducers } from "redux";
import quizReducer, { IQuizState } from "./quiz/quizReducer";

export interface IStore {
  quiz: IQuizState;
}

export default combineReducers({
  quiz: quizReducer
});
