const questions = [
  {
    title: "My Name is ?",
    img: "",
    video: "",
    explaination: "",
    options: ["anand", "tarun", "ankita", "rahul"],
    correct: "tarun",
    id: "1"
  },
  {
    title: "My Name is ?",
    img: "",
    video: "",
    explaination: "",
    options: ["anand", "tarun", "ankita", "rahul"],
    correct: "tarun",
    id: "2"
  }
];

// n = 5 to export 5 question
export default (n = 5) =>
  Promise.resolve(questions.sort(() => 0.5 - Math.random()).slice(0, n));
