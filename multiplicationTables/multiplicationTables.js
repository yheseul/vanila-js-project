const $question = document.getElementById('question');
const $leftOperand = document.getElementById('leftOperand');
const $rigthOperand = document.getElementById('rigthOperand');

// 랜덤 숫자 생성
randomNumberGeneration = () => {
  return Math.floor(Math.random() * 10) + 1;
}

// 구구단 문제 생성
creatingMultiplicationProblem = () => {
  $leftOperand.innerHTML = `${randomNumberGeneration()}`;
  $rigthOperand.innerHTML = `${randomNumberGeneration()}`;
}

creatingMultiplicationProblem();