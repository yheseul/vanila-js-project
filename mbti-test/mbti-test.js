const checkboxes1=document.querySelectorAll(".checkbox1");
const checkboxes2=document.querySelectorAll(".checkbox2");
const checkboxes3=document.querySelectorAll(".checkbox3");
const checkboxes4=document.querySelectorAll(".checkbox4");
const input=document.querySelectorAll("input");
const progressBar=document.getElementById("progress-Bar");
const questions=document.querySelectorAll(".question");
const submitButton=document.getElementById("button");

submitButton.disabled = true;

oneCheck=(target, checkboxes)=>{
  checkboxes.forEach((checkbox) => checkbox.checked = false);
  target.checked = true;
}

unduplicatedCheck=(checkboxes)=>{
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => oneCheck(checkbox, checkboxes));
  });
}

unduplicatedCheck(checkboxes1);
unduplicatedCheck(checkboxes2);
unduplicatedCheck(checkboxes3);
unduplicatedCheck(checkboxes4);

input.forEach((event)=>{
  event.addEventListener("click",()=>{
    const selctedCheckboxes=document.querySelectorAll('input:checked');
    const selctedCheckboxesCount=selctedCheckboxes.length;
    const questionsCount=questions.length;
    if(selctedCheckboxesCount>0) progressBar.value=100*(selctedCheckboxesCount/questionsCount);
    if(selctedCheckboxesCount === 4){
      submitButton.innerText="나의 MBTI 확인하기!";
      submitButton.disabled = false;
    }
  })
})

submitButton.addEventListener("click",()=>{
  result ="";
  const selctedCheckboxes=document.querySelectorAll('input:checked');
  selctedCheckboxes.forEach((el)=>result += el.value);
  alert(`당신의 MBTI 유형은 ${result}입니다.`);
})