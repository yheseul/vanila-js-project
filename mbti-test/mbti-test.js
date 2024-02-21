const checkboxes1=document.getElementsByName("checkbox1");
const checkboxes2=document.getElementsByName("checkbox2");
const checkboxes3=document.getElementsByName("checkbox3");
const checkboxes4=document.getElementsByName("checkbox4");
const submitButton=document.getElementById("button");

function clickCheck1(target){
  checkboxes1.forEach((checkbox)=>{checkbox.checked=false;})
  target.checked=true;
}
function clickCheck2(target){
  checkboxes2.forEach((checkbox)=>{checkbox.checked=false;})
  target.checked=true;
}
function clickCheck3(target){
  checkboxes3.forEach((checkbox)=>{checkbox.checked=false;})
  target.checked=true;
}
function clickCheck4(target){
  checkboxes4.forEach((checkbox)=>{checkbox.checked=false;})
  target.checked=true;
}
function getCheckedCount(){
  const selctedCheckboxes=document.querySelectorAll('input:checked');
  const selctedCheckboxesCount=selctedCheckboxes.length;
  if(selctedCheckboxesCount === 4){
    submitButton.innerText="나의 MBTI 확인하기!";
  }
}