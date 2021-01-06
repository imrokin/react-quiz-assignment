import submitReducer from "./submit";
import questionReducer from "./question";
import scoreReducer from "./score";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  question: questionReducer,
  submited: submitReducer,
  score: scoreReducer
});

export default allReducers;
