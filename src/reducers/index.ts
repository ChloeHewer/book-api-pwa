import { combineReducers } from "redux";
import bookReducer, { IBookState } from "./bookReducer/bookReducer";

export interface IStore {
  books: IBookState;
}

export default combineReducers({
  books: bookReducer
});
