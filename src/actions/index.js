export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const submit = () => {
  return {
    type: "SUBMIT"
  };
};

export const start = () => {
  return {
    type: "START"
  };
};

export const response = data => {
  return {
    type: "RESPONSE",
    payload: data
  };
};

export const elapse = data => {
  return {
    type: "ELAPSE",
    payload: data
  };
};
