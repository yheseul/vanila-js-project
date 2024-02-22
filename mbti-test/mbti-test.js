const checkboxes1=document.querySelectorAll(".checkbox1");
const checkboxes2=document.querySelectorAll(".checkbox2");
const checkboxes3=document.querySelectorAll(".checkbox3");
const checkboxes4=document.querySelectorAll(".checkbox4");
const submitButton=document.getElementById("button");
const input=document.querySelectorAll("input");

function oneCheck(target, checkboxes) {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  target.checked = true;
}
checkboxes1.forEach((checkbox) => {
  checkbox.addEventListener('click', function () {
    oneCheck(checkbox, checkboxes1);
  });
});
checkboxes2.forEach((checkbox) => {
  checkbox.addEventListener('click', function () {
    oneCheck(checkbox, checkboxes2);
  });
});
checkboxes3.forEach((checkbox) => {
  checkbox.addEventListener('click', function () {
    oneCheck(checkbox, checkboxes3);
  });
});
checkboxes4.forEach((checkbox) => {
  checkbox.addEventListener('click', function () {
    oneCheck(checkbox, checkboxes4);
  });
});

input.forEach((event)=>{
  event.addEventListener("click",()=>{
    const selctedCheckboxes=document.querySelectorAll('input:checked');
    const selctedCheckboxesCount=selctedCheckboxes.length;
    if(selctedCheckboxesCount === 4){
      submitButton.innerText="나의 MBTI 확인하기!";
    }
  })
})

  submitButton.addEventListener("click",()=>{
    const selctedCheckboxes=document.querySelectorAll('input:checked');
    result ="";
    selctedCheckboxes.forEach((el)=>{
      result += el.value;
    })
    alert(`당신의 MBTI 유형은 ${result}입니다.`)
  })