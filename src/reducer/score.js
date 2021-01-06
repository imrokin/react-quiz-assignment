const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "START":
      return 0;
    default:
      return 0;
  }
};
export default scoreReducer;
