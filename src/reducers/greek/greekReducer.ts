import { ThunkAction } from "redux-thunk";

// IFootball interface
export interface IGod {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  role: string;
}

// action types
export const SET_GOD = "SET_GOD";

// action creators
export const setGod = (god: IGod[]): ISetGod => ({
  type: SET_GOD,
  god
});

type ThunkResult<R> = ThunkAction<R, IGreekState, null, IGreekActions>;

// action interfaces
export interface ISetGod {
  type: typeof SET_GOD;
  god: IGod[];
}

// combining action creators
type IGreekActions = ISetGod;

export interface IGreekState {
  player: IGod[];
}

// reducer with initial state
const initialState: IGreekState = {
  player: [
    {
      id: 0,
      name: "",
      position: "",
      dateOfBirth: "",
      countryOfBirth: "",
      nationality: "",
      role: ""
    }
  ]
};

const greekReducer = (state = initialState, action: IGreekActions) => {
  switch (action.type) {
    case SET_GOD:
      return { ...state, player: action.god };
    default:
      return state;
  }
};

export default greekReducer;
