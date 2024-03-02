const $question = document.getElementById('question');
const $leftOperand = document.getElementById('leftOperand');
const $rigthOperand = document.getElementById('rigthOperand');
const $input = document.querySelector('input')
const $submitButton = document.getElementById('submitButton');
const $correctQuestionCount = document.getElementById('correctQuestionCount');
const $wrongQuestionCount = document.getElementById('wrongQuestionCount');
const $solvingOtherProblemsButton = document.getElementById('solvingOtherProblemsButton');

// 랜덤 숫자 생성 함수
randomNumberGeneration = () => {
  return Math.floor(Math.random() * 10) + 1;
}

// 랜덤 숫자
randomNumber = () => {
  const leftOperand = randomNumberGeneration();
  const rigthOperand = randomNumberGeneration();

  return [leftOperand, rigthOperand];
}

// 생성된 랜덤 숫자를 담은 배열 디스트럭처링 할당
const [leftOperand, rigthOperand] = randomNumber();

// 구구단 문제 생성
creatingMultiplicationProblem = (leftOperand, rigthOperand) => {
  $leftOperand.innerHTML = leftOperand;
  $rigthOperand.innerHTML = rigthOperand;
}

creatingMultiplicationProblem(leftOperand, rigthOperand);

// 문제 정답 제출 이벤트 핸들러
handleSubmitButtonClick = (event) => {
  event.preventDefault();

  const answerQuestion = leftOperand * rigthOperand;
  const answerEnteredUser = $input.value;

  checkAnswerQuestionMessage(answerQuestion, answerEnteredUser);
  $input.value = '';
}

// 문제 정답 결과 메세지 출력
checkAnswerQuestionMessage = (answerQuestion, answerEnteredUser) => {
  if(answerQuestion != answerEnteredUser) {
    alert('틀렸습니다.');
    numberQuestionsIncorrect();
  }
  if(answerQuestion == answerEnteredUser) {
    alert('정답입니다.');
    numberQuestionsMatched();
  }
}

// 틀린 문제 개수
numberQuestionsIncorrect = () => {
  const currentWrongQuestionCount=parseInt($wrongQuestionCount.innerText, 10);
  $wrongQuestionCount.innerHTML = currentWrongQuestionCount + 1;
}

// 맞춘 문제 개수
numberQuestionsMatched = () => {
  const currentCorrectQuestionCount=parseInt($correctQuestionCount.innerText, 10);
  $correctQuestionCount.innerHTML = currentCorrectQuestionCount + 1;
}

// 다른 문제 풀기 버튼 클릭 시 새로운 문제로 업데이트
askDifferentQuestion = () => {
  // 새로운 랜덤 숫자 생성
  const [newLeftOperand, newRigthOperand] = randomNumber();

  // 생성된 새로운 숫자를 사용하여 문제 업데이트
  creatingMultiplicationProblem(newLeftOperand, newRigthOperand);
}

// 다른 문제 풀기 버튼 클릭 이벤트 리스너 등록
$solvingOtherProblemsButton.addEventListener("click", askDifferentQuestion);

// 제출 버튼 클릭 이벤트 리스너 등록
$submitButton.addEventListener("click", handleSubmitButtonClick);

// 입력창 엔터키 이벤트 리스너 등록
$input.addEventListener("keypress", (event) => {
  if(event.key === 'Enter') handleSubmitButtonClick(event);
});