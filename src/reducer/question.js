const questions = [
  {
    title: "My name is _______ ?",
    content: "This is optional field for more text content for question",
    img: "https://via.placeholder.com/350x150",
    video: "",
    explaination: "Because my name is tarun!",
    options: ["Anand", "Tarun", "Ankita", "Rahul"],
    correct: "tarun",
    id: "1"
  },
  {
    title: "I am 30 yrs old?",
    content: "This is optional field for more text content for question",
    img: "",
    video: "https://vjs.zencdn.net/v/oceans.mp4",
    explaination: "Yes, I am 30 yrs Old.",
    options: ["True", "False"],
    correct: "true",
    id: "2"
  },
  {
    title: "My nationality is?",
    content: "This is optional field for more text content for question",
    img: "",
    video: "",
    explaination: "I am Indian by citizenship.",
    options: ["Indian", "African", "American", "Tanzanian"],
    correct: "indian",
    id: "3"
  }
];

const questionReducer = (state = [...questions], action) => {
  switch (action.type) {
    case "RESPONSE":
      const newState = JSON.parse(JSON.stringify(state));
      newState[action.payload.index].options = [action.payload.option];
      return newState;
    case "START":
      return JSON.parse(JSON.stringify(questions));
    default:
      return state;
  }
};

export default questionReducer;
