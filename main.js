let start = document.getElementById("start");
let result = document.getElementById("result");
let main = document.getElementById("main");

let allQuestions = [
  {
    question: "2+2",
    correct: "4",
    answers: [4, 5, 8, 18],
  },

  {
    question: "4+4",
    correct: "8",
    answers: [0, 5, 8, 16],
  },
];
let correctQuestions = 0;
let countSuccess = 0;
