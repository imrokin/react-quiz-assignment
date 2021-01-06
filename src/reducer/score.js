const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case "RESPONSE":
      return state + 1;
    default:
      return 0;
  }
};
export default scoreReducer;
