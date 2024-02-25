const input = document.querySelectorAll("input");
const progressBar = document.getElementById("progress-Bar");
const questions = document.querySelectorAll(".question");
const submitButton = document.getElementById("button");

// 제출 버튼 비활성화(기본값)
submitButton.disabled = true;

// 중복 체크 불가 함수
selectSingleCheckbox = (target, checkboxes) => {
  checkboxes.forEach((checkbox) => checkbox.checked = false);
  target.checked = true;
}

// 각 체크박스 그룹 요소에 이벤트 리스너 등록
attachExclusiveCheck = (checkboxes) => {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => selectSingleCheckbox(checkbox, checkboxes));
  });
}

// 그룹화된 체크박스 불러오는 함수
generateCheckboxes = () => {
  const checkboxGroups = [];
  for (let i = 1; i <= questions.length; i++) {
    checkboxGroups.push(document.querySelectorAll(`input[name="checkbox${i}"]`));
  }
  return checkboxGroups;
}

// 불러온 체크박스 그룹을 모두 담은 배열로 이루어진 변수
const allCheckboxGroups = generateCheckboxes();

// 체크박스 그룹별로 클릭 이벤트 발생하는 함수 호출
allCheckboxGroups.forEach((checkboxes) => {
  attachExclusiveCheck(checkboxes);
})

// 체크박스 클릭 이벤트 핸들러
handleCheckboxClick = () => {
  const selectedCheckboxes = document.querySelectorAll('input:checked');
  const selectedCheckboxesCount = selectedCheckboxes.length;
  const totalQuestionsCount = questions.length;

  updateProgressBar(selectedCheckboxesCount, totalQuestionsCount);

  if (selectedCheckboxesCount === totalQuestionsCount) {
    enableSubmitButton();
  }
};

// 프로그레스 바 업데이트 함수
updateProgressBar = (checkedCount, totalCount) => {
  const progressPercentage = (checkedCount / totalCount) * 100;
  progressBar.value = progressPercentage;
};

// 제출 버튼 활성화 함수
enableSubmitButton = () => {
  submitButton.innerText = "나의 MBTI 확인하기!";
  submitButton.disabled = false;
};

// 각 체크박스에 이벤트 리스너 등록
input.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheckboxClick);
});

// 테스트 결과 출력 기능
testResult = (checkedList) => {
  resultMessage = "";
  checkedList.forEach((el) => resultMessage += el.value);
  alert(`당신의 MBTI 유형은 ${resultMessage}입니다.`);
}

// 테스트 결과 함수를 호출하는 제출 버튼 클릭 이벤트 리스너
submitButton.addEventListener("click", () => {
  const selctedCheckboxes = document.querySelectorAll('input:checked');
  testResult(selctedCheckboxes);
})

