const time = 10;

const timeReducer = (state = time, action) => {
  switch (action.type) {
    case "ELAPSE":
      return state - 1;
    default:
      return state;
  }
};
export default timeReducer;
