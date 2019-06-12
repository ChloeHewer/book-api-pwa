import { ThunkAction } from "redux-thunk";

// IQuiz interface
export interface IQuiz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

// action types
export const FETCH_QUIZ = "FETCH_QUIZ";
export const SUCCESS_FETCH_QUIZ = "SUCCESS_FETCH_QUIZ";
export const FAILURE_FETCH_QUIZ = "FAILURE_FETCH_QUIZ";

// action creators
export const getQuiz = (): IGetQuizAction => ({
  type: FETCH_QUIZ
});
export const getQuizSuccess = (quiz: IQuiz[]): IGetQuizSuccessAction => ({
  type: SUCCESS_FETCH_QUIZ,
  quiz
});
export const getQuizFailure = (error: Error): IGetQuizFailureAction => ({
  type: FAILURE_FETCH_QUIZ,
  error
});

export const fetchQuiz = () => (dispatch: any) => {
  dispatch(getQuiz());
  fetch(
    "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple"
  )
    .then(res => res.json())
    .then(data => dispatch(getQuizSuccess(data.results)))
    .catch(error => dispatch(getQuizFailure(error)));
};

type ThunkResult<R> = ThunkAction<R, IQuizState, null, IQuizActions>;

// action interfaces
export interface IGetQuizAction {
  type: typeof FETCH_QUIZ;
}
export interface IGetQuizSuccessAction {
  type: typeof SUCCESS_FETCH_QUIZ;
  quiz: IQuiz[];
}
export interface IGetQuizFailureAction {
  type: typeof FAILURE_FETCH_QUIZ;
  error: Error;
}

// combining action creators
type IQuizActions =
  | IGetQuizAction
  | IGetQuizSuccessAction
  | IGetQuizFailureAction;

export interface IQuizState {
  quiz: IQuiz[];
  error: null | Error;
  loading: boolean;
}

// reducer with initial state
const initialState: IQuizState = {
  quiz: [
    {
      category: "string",
      type: "string",
      difficulty: "string",
      question: "string",
      correct_answer: "string",
      incorrect_answers: [""]
    }
  ],
  error: null,
  loading: false
};

const quizReducer = (state = initialState, action: IQuizActions) => {
  switch (action.type) {
    case FETCH_QUIZ:
      return { ...state, loading: true, error: null };
    case SUCCESS_FETCH_QUIZ:
      return { ...state, loading: false, error: null, quiz: action.quiz };
    case FAILURE_FETCH_QUIZ:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default quizReducer;
