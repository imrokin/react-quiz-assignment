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
  },
  {
    title: "Match the following first & last names?",
    content:
      "A. Tarun B.Anand C.Vinayak D.Ankita , 1.Kumar 2.Pandey 3.Tripathi 4.Bhati",
    img: "",
    video: "",
    explaination:
      "Tarun Bhati , Anand Kumar , Vinayak Tripathi , Ankita Pandey",
    options: [
      "A-4,B-1,C-3,D-2",
      "A-1,B-2,C-3,D-4",
      "A-2,B-3,C-4,D-1",
      "A-3,B-2,C-1,D-4"
    ],
    correct: "A-4,B-1,C-3,D-2",
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
