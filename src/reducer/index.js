import responseReducer from "./response";
import questionReducer from "./question";
import scoreReducer from "./score";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  question: questionReducer,
  response: responseReducer,
  score: scoreReducer
});

export default allReducers;
