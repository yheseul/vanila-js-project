const checkboxes1 = document.querySelectorAll(".checkbox1");
const checkboxes2 = document.querySelectorAll(".checkbox2");
const checkboxes3 = document.querySelectorAll(".checkbox3");
const checkboxes4 = document.querySelectorAll(".checkbox4");
const input = document.querySelectorAll("input");
const progressBar = document.getElementById("progress-Bar");
const questions = document.querySelectorAll(".question");
const submitButton = document.getElementById("button");

submitButton.disabled = true;

selectSingleCheckbox = (target, checkboxes) => {
  checkboxes.forEach((checkbox) => checkbox.checked = false);
  target.checked = true;
}

attachExclusiveCheck = (checkboxes) => {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => selectSingleCheckbox(checkbox, checkboxes));
  });
}

attachExclusiveCheck(checkboxes1);
attachExclusiveCheck(checkboxes2);
attachExclusiveCheck(checkboxes3);
attachExclusiveCheck(checkboxes4);

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

submitButton.addEventListener("click", () => {
  result = "";
  const selctedCheckboxes = document.querySelectorAll('input:checked');
  selctedCheckboxes.forEach((el) => result += el.value);
  alert(`당신의 MBTI 유형은 ${result}입니다.`);
})