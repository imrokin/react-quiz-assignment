import responseReducer from "./response";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  response: responseReducer
});

export default allReducers;
