const responseReducer = (state = 0, action) => {
  switch (action.type) {
    case "SUBMIT":
      return true;
    case "RESPONSE":
      return true;
    default:
      return true;
  }
};
export default responseReducer;
