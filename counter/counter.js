const number=document.getElementById('number');
const decrease=document.getElementById('decrease');
const reset=document.getElementById('reset');
const increase=document.getElementById('increase');

decrease.onclick=()=>{
  const current=parseInt(number.innerText, 10);
  if(current>0){
    number.innerText=current-1;
  }
  else{
    alert('0 이하로 내려갈 수 없습니다.')
  }
}

increase.onclick=()=>{
  const current=parseInt(number.innerText, 10);
  number.innerText=current+1;
}

reset.onclick=()=>{
  count=0;
  number.innerText=count;
}