import { combineReducers } from "redux";
import greekReducer, { IGreekState } from "./greek/greekReducer";

export interface IStore {
  god: IGreekState;
}

export default combineReducers({
  god: greekReducer
});
