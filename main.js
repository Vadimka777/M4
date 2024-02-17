let start = document.getElementById("start");
let result = document.getElementById("result");
let main = document.getElementById("main");

let allQuestions = [
  {
    question: "2+2 = ?",
    currect: "4",
    answers: [4, 5, 8, 18],
  },

  {
    question: "4+4 = ?",
    currect: "8",
    answers: [0, 5, 8, 16],
  },
];
let currectQuestions = 0;
let countSuccess = 0;

start.addEventListener("click", start_program);

function start_program() {
  start.classList.add("none");
  main.classList.remove("none");
  result.classList.add("none");
  generateQuestion();
}

function generateQuestion() {
  let question = allQuestions[currectQuestions].question;
  main.innerHTML = `<h1 class = "question">${question}</h1>`;
  
  let btn_block = "";
  let answers = allQuestions[currectQuestions].answers;
  for (let i of answers) {
    btn_block += `<button class = "btn" onclick = "checkQuestion(${i})">${i}</button>`;
  }
  main.innerHTML += `<nav class = "btn_block">${btn_block}</nav>`;
}

function checkQuestion(num) {
  let currect = allQuestions[currectQuestions].currect
  if (num == currect) {
    countSuccess += 1;
  }
  currectQuestions += 1;
  if (allQuestions.length > currectQuestions) {
    generateQuestion()
  }
  else {
    stopQuize()
  }
}
function stopQuize() {
  start.classList.remove("none")
  main.classList.add("none")
  result.classList.remove("none")

  result.innerHTML = `Решено ${countSuccess} из ${allQuestions.length}`

  currectQuestions = 0
  countSuccess = 0
}
