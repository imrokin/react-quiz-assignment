const submitReducer = (state = false, action) => {
  switch (action.type) {
    case "SUBMIT":
      return true;
    case "START":
      return false;
    default:
      return false;
  }
};
export default submitReducer;
