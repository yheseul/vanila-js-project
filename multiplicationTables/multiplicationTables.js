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
creatingMultiplicationProblem = () => {
  $leftOperand.innerHTML = leftOperand;
  $rigthOperand.innerHTML = rigthOperand;
}

creatingMultiplicationProblem()

// 문제 정답 제출 이벤트 핸들러
handleSubmitButtonClick = () => {
  const answerQuestion = leftOperand * rigthOperand;
  const answerEnteredUser = $input.value;

  checkAnswerQuestionMessage(answerQuestion, answerEnteredUser);
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

// 제출 버튼 클릭 이벤트 리스너 등록
$submitButton.addEventListener("click", handleSubmitButtonClick);

// 입력창 엔터키 이벤트 리스너 등록
$input.addEventListener("keypress", (event) => {
  if(event.key === 'Enter') handleSubmitButtonClick();
});