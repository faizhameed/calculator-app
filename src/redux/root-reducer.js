import { combineReducers } from "redux";
import inputReducer from "./input/input.reducer";

const rootReducer = combineReducers({
  inputReducer: inputReducer
});

export default rootReducer;
