const responseReducer = (state = false, action) => {
  switch (action.type) {
    case "SUBMIT":
      return true;
    default:
      return false;
  }
};
export default responseReducer;
