const $question = document.getElementById('question');
const $leftOperand = document.getElementById('leftOperand');
const $rigthOperand = document.getElementById('rigthOperand');
const $input = document.querySelector('input')

// 랜덤 숫자 생성 함수
randomNumberGeneration = () => {
  return Math.floor(Math.random() * 10) + 1;
}

// 구구단 문제 생성
creatingMultiplicationProblem = (leftOperand ,rigthOperand) => {
  $leftOperand.innerHTML = leftOperand;
  $rigthOperand.innerHTML = rigthOperand;
}

// 랜덤 숫자 생성
randomNumber = () => {
  const leftOperand = randomNumberGeneration();
  const rigthOperand = randomNumberGeneration();

  creatingMultiplicationProblem(leftOperand, rigthOperand);
}

randomNumber();
