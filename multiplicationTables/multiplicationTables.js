const $question = document.getElementById('question');
const $leftOperand = document.getElementById('leftOperand');
const $rigthOperand = document.getElementById('rigthOperand');
const $input = document.querySelector('input')
const $submitButton = document.getElementById('submitButton');
const $correctQuestionCount = document.getElementById('correctQuestionCount');
const $wrongQuestionCount = document.getElementById('wrongQuestionCount');
const $solvingOtherProblemsButton = document.getElementById('solvingOtherProblemsButton');

randomNumberGeneration = () => {
  return Math.floor(Math.random() * 10) + 1;
}

randomNumber = () => {
  const leftOperand = randomNumberGeneration();
  const rigthOperand = randomNumberGeneration();

  creatingMultiplicationProblem(leftOperand, rigthOperand);
}

creatingMultiplicationProblem = (leftOperand, rigthOperand) => {
  $leftOperand.innerHTML = leftOperand;
  $rigthOperand.innerHTML = rigthOperand;
}

randomNumber();

handleSubmitButtonClick = (event) => {
  event.preventDefault();

  const leftOperand = $leftOperand.innerHTML;
  const rigthOperand = $rigthOperand.innerHTML;
  const answerQuestion = leftOperand * rigthOperand;
  const answerEnteredUser = $input.value;

  checkAnswerQuestion(answerQuestion, answerEnteredUser);
  $input.value = '';
}

checkAnswerQuestion = (answerQuestion, answerEnteredUser) => {
  if(answerQuestion != answerEnteredUser) {
    wrongAnswerMessage();
    numberQuestionsIncorrect();
  }
  if(answerQuestion == answerEnteredUser) {
    answerMessage();
    numberQuestionsMatched();
    randomNumber();
  }
}

wrongAnswerMessage = () => {
  alert('틀렸습니다.');
}

answerMessage = () => {
  alert('정답입니다.');
}

numberQuestionsIncorrect = () => {
  const currentWrongQuestionCount=parseInt($wrongQuestionCount.innerText, 10);
  $wrongQuestionCount.innerHTML = currentWrongQuestionCount + 1;
}

numberQuestionsMatched = () => {
  const currentCorrectQuestionCount=parseInt($correctQuestionCount.innerText, 10);
  $correctQuestionCount.innerHTML = currentCorrectQuestionCount + 1;
}

askDifferentQuestion = (event) => {
  event.preventDefault();
  randomNumber();
}

$solvingOtherProblemsButton.addEventListener("click", askDifferentQuestion);

$submitButton.addEventListener("click", handleSubmitButtonClick);

$input.addEventListener("keypress", (event) => {
  if(event.key === 'Enter') handleSubmitButtonClick(event);
});