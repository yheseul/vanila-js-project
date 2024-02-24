const mbtiForm=document.getElementById("mainForm");
const progressBar=document.getElementById("progress-Bar");
const checkboxes1=document.querySelectorAll(".checkbox1");
const checkboxes2=document.querySelectorAll(".checkbox2");
const checkboxes3=document.querySelectorAll(".checkbox3");
const checkboxes4=document.querySelectorAll(".checkbox4");
const submitButton=document.getElementById("button");
const input=document.querySelectorAll("input");
const questions=document.querySelectorAll(".question");

function oneCheck(target, checkboxes) {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  target.checked = true;
}
function unduplicatedCheck(checkboxes){
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', function () {
      oneCheck(checkbox, checkboxes);
    });
  });
}

unduplicatedCheck(checkboxes1);
unduplicatedCheck(checkboxes2);
unduplicatedCheck(checkboxes3);
unduplicatedCheck(checkboxes4);

input.forEach((event)=>{
    let count=0;
    event.addEventListener("click",()=>{
      const selctedCheckboxes=document.querySelectorAll('input:checked');
      const selctedCheckboxesCount=selctedCheckboxes.length;
    if(selctedCheckboxesCount>0){ 
    progressBar.value=100*(selctedCheckboxesCount/questions.length);
    }
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

