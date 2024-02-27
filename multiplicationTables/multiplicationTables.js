const $question = document.getElementById('question');
const $leftOperand = document.getElementById('leftOperand');
const $rigthOperand = document.getElementById('rigthOperand');
const $input = document.querySelector('input')
const $submitButton = document.getElementById('submitButton');
const $correctQuestionCount = document.getElementById('correctQuestionCount');
const $wrongQuestionCount = document.getElementById('wrongQuestionCount');

// 랜덤 숫자 생성 함수
randomNumberGeneration = () => {
  return Math.floor(Math.random() * 10) + 1;
}

const leftOperand = randomNumberGeneration();
const rigthOperand = randomNumberGeneration();

// 구구단 문제 생성
creatingMultiplicationProblem = () => {
  $leftOperand.innerHTML = leftOperand;
  $rigthOperand.innerHTML = rigthOperand;
}

creatingMultiplicationProblem();

// 문제 정답 제출 이벤트 핸들러
handleSubmitButtonClick = () => {
  const answerQuestion = leftOperand * rigthOperand;
  const answerEnteredUser = $input.value;

  checkAnswerQuestion(answerQuestion, answerEnteredUser);
}

// 틀린 문제 개수
numberQuestionsIncorrect = () => {
  const currentWrongQuestionCount=parseInt($wrongQuestionCount.innerText, 10);
  $wrongQuestionCount.innerHTML = currentWrongQuestionCount + 1;
}
// 맞춘 문제 개수
numberQuestionsMatched = () => {
  const currentCorrectQuestionCount=parseInt($correctQuestionCount.innerText, 10);
  correctQuestionCount.innerHTML = currentCorrectQuestionCount + 1;
}

// 문제 정답 결과 메세지 출력
checkAnswerQuestion = (answerQuestion, answerEnteredUser) => {
  if(answerQuestion != answerEnteredUser) {
    alert('틀렸습니다.');
    numberQuestionsIncorrect();
  }
  if(answerQuestion == answerEnteredUser) {
    alert('정답입니다.');
    numberQuestionsMatched();
  }
}

// 문제 정답 제출 이벤트 리스너 복수 등록
$submitButton.addEventListener("click", handleSubmitButtonClick);
$input.addEventListener("keypress", (event) => {
  if(event.key === 'Enter') handleSubmitButtonClick();
});