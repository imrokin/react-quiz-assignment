import submitReducer from "./submit";
import questionReducer from "./question";
import scoreReducer from "./score";
import timeReducer from "./time";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  question: questionReducer,
  submited: submitReducer,
  score: scoreReducer,
  time: timeReducer
});

export default allReducers;
