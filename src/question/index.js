const questions = [
  {
    title: "My Name is _______ ?",
    img: "",
    video: "",
    explaination: "",
    options: ["anand", "tarun", "ankita", "rahul"],
    correct: "tarun",
    id: "1"
  },
  {
    title: "I am 30 Years old?",
    img: "",
    video: "",
    explaination: "",
    options: ["true", "false"],
    correct: "true",
    id: "2"
  },
  {
    title: "My Nationality is?",
    img: "",
    video: "",
    explaination: "",
    options: ["Indian", "African", "American", "Tanzanian"],
    correct: "Indian",
    id: "2"
  }
];

export default () => Promise.resolve(questions);
