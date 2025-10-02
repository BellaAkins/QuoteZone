const questions = [
  {
    question: "What is the name of this animal?",
    answers: [
      { text: "Koala", correct: false },
      { text: "Quokka", correct: true },
    ],
    image: "./images/quokka.png",
  },

  {
    question: "What is the name of this animal?",
    answers: [
      { text: "Tortoise", correct: true },
      { text: "Turtle", correct: false },
    ],
    image: "./images/tortoise.png",
  },

  {
    question: "What is the name of this animal?",
    answers: [
      { text: "Alligator", correct: true },
      { text: "Crocodile", correct: false },
    ],
    image: "./images/alligator.png",
  },
  {
    question: "What is the name of this animal?",
    answers: [
      { text: "Quokka", correct: false },
      { text: "Koala", correct: true },
    ],
    image: "./images/koala.png",
  },

  {
    question: "What is the name of this animal?",
    answers: [
      { text: "Alligator", correct: false },
      { text: "Crocodile", correct: true },
    ],
    image: "./images/crocodile.png",
  },

  {
    question: "What is the name of this animal?",
    answers: [
      { text: "Frog", correct: false },
      { text: "Toad", correct: true },
    ],
    image: "./images/toad.png",
  },

  {
    question: "What is the name of this insect?",
    answers: [
      { text: "Hornet", correct: true },
      { text: "Wasp", correct: false },
    ],
    image: "./images/hornet.png",
  },

  {
    question: "What is the name of this animal?",
    answers: [
      { text: "Leopard", correct: true },
      { text: "Jaguar", correct: false },
    ],
    image: "./images/leopard.png",
  },
  {
    question: "What is the name of this insect?",
    answers: [
      { text: "Hornet", correct: false },
      { text: "Wasp", correct: true },
    ],
    image: "./images/wasp.png",
  },
  {
    question: "What is the name of this animal?",
    answers: [
      { text: "Frog", correct: true },
      { text: "Toad", correct: false },
    ],
    image: "./images/frog.png",
  },
  {
    question: "What is the name of this animal?",
    answers: [
      { text: "Leopard", correct: false },
      { text: "Jaguar", correct: true },
    ],
    image: "./images/jaguar.png",
  },
  {
    question: "What is the name of this animal?",
    answers: [
      { text: "Llama", correct: true },
      { text: "Alpaca", correct: false },
    ],
    image: "./images/llama.png",
  },

  {
    question: "What is the name of this animal?",
    answers: [
      { text: "Llama", correct: false },
      { text: "Alpaca", correct: true },
    ],
    image: "./images/alpaca.png",
  },
  {
    question: "What is the name of this animal?",
    answers: [
      { text: "Tortoise", correct: false },
      { text: "Turtle", correct: true },
    ],
    image: "./images/turtle.png",
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const imageQuestion = document.getElementById("imageQuestion");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  if (currentQuestion.image) {
    imageQuestion.innerHTML = `<img src="${currentQuestion.image}" alt="Question Image">`;
  } else {
    imageQuestion.innerHTML = "";
  }

  showAnswerOptions();
}

function showAnswerOptions() {
  let currentQuestion = questions[currentQuestionIndex];
  currentQuestion.answers.forEach((answer) => {
    const answerOptions = document.createElement("button");
    answerOptions.innerHTML = answer.text;
    answerOptions.classList.add("btn");
    answerButtons.appendChild(answerOptions);
    if (answer.correct) {
      answerOptions.dataset.correct = answer.correct;
    }
    answerOptions.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const clickSound = document.getElementById("click-sound");
  if (clickSound) {
    /*
    clickSound.currentTime = 0;
    clickSound.play();
    */
    //to avoid skipping sound on rapid clicks, clone the audio element
    const soundClone = clickSound.cloneNode();
    soundClone.play();
  }

  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  imageQuestion.innerHTML = "";
  questionElement.innerHTML = `You scored ${score} out of ${questions.length} `;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
