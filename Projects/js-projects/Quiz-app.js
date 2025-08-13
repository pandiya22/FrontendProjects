const questions = [
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: "Hyper Text Markup Language" },
  { question: "Which CSS property changes text color?", options: ["font-color", "color", "text-color"], answer: "color" },
  { question: "Inside which HTML element do we put JavaScript?", options: ["<javascript>", "<js>", "<script>"], answer: "<script>" },
  { question: "Which symbol is used for comments in CSS?", options: ["// comment", "/* comment */", "<!-- comment -->"], answer: "/* comment */" },
  { question: "Which company developed JavaScript?", options: ["Netscape", "Microsoft", "Google"], answer: "Netscape" }
];

let currentQuestion = 0;
let score = 0;
let wrongCount = 0;
let userName = "";

function startQuiz() {
  userName = document.getElementById('username').value.trim();
  if (userName === "") {
    alert("Please enter your name");
    return;
  }
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('welcome').textContent = `Welcome ${userName}!`;
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').textContent = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option';
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
    document.getElementById('score').textContent = score;
  } else {
    wrongCount++;
    document.getElementById('wrong').textContent = wrongCount;
    alert(`Wrong! Correct answer is: ${questions[currentQuestion].answer}`);
    if (wrongCount >= 3) {
      endQuiz();
      return;
    }
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('result-container').style.display = 'block';
  document.getElementById('final-score').textContent =
    `${userName}, your final score is ${score} out of ${questions.length}`;
}

