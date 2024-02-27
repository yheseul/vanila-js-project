const $question = document.getElementById('question');
const $leftOperand = document.getElementById('leftOperand');
const $rigthOperand = document.getElementById('rigthOperand');
const $input = document.querySelector('input')
const $submitButton = document.getElementById('submitButton');

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

// 제출 버튼 클릭 이벤트 핸들러
handleSubmitButtonClick = () => {
  const answerQuestion = leftOperand * rigthOperand;
  const answerEnteredUser = $input.value;

  checkAnswerQuestion(answerQuestion, answerEnteredUser);
}

// 문제 정답 결과 메세지 출력
checkAnswerQuestion = (answerQuestion, answerEnteredUser) => {
  if(answerQuestion != answerEnteredUser) alert('틀렸습니다.');
  if(answerQuestion == answerEnteredUser) alert('정답입니다.');
}

// 제출 버튼에 이벤트 리스너 등록
submitButton.addEventListener("click", handleSubmitButtonClick);