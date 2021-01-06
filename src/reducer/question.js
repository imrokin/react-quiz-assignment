const questions = [
  {
    title: "My Name is _______ ?",
    content: "More Question text",
    img: "https://via.placeholder.com/350x150",
    video: "",
    explaination: "Some explaination",
    options: ["anand", "tarun", "ankita", "rahul"],
    correct: "tarun",
    id: "1"
  },
  {
    title: "I am 30 Years old?",
    content: "More Question text",
    img: "",
    video: "https://vjs.zencdn.net/v/oceans.mp4",
    explaination: "Some explaination",
    options: ["true", "false"],
    correct: "true",
    id: "2"
  },
  {
    title: "My Nationality is?",
    content: "More Question text",
    img: "",
    video: "",
    explaination: "Some explaination",
    options: ["Indian", "African", "American", "Tanzanian"],
    correct: "Indian",
    id: "3"
  }
];

const questionReducer = (state = questions, action) => {
  switch (action.type) {
    case "RESPONSE":
      const newState = [...state];
      newState[action.payload.index].options = [action.payload.option];
      return newState;
    case "START":
      return questions;
    default:
      return state;
  }
};

export default questionReducer;
