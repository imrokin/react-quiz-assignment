//time in seconds
const time = 60;

const timeReducer = (state = time, action) => {
  switch (action.type) {
    case "ELAPSE":
      return state - 1;
    case "START":
      return time;
    default:
      return state;
  }
};
export default timeReducer;
