const $question = document.getElementById('question');

// 랜덤 숫자 생성
randomNumberGeneration = () => {
  return Math.floor(Math.random() * 10) + 1;
}

// 구구단 문제 생성
creatingMultiplicationProblem = () => {
  $question.innerHTML = `${randomNumberGeneration()} X ${randomNumberGeneration()}`;
}

creatingMultiplicationProblem();