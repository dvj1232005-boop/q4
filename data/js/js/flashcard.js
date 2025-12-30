const box=document.getElementById("cards");
const key="fc_"+bai;
let cards=JSON.parse(localStorage.getItem(key)||"[]");

function render(){
  box.innerHTML="";
  cards.forEach(c=>{
    box.innerHTML+=`<div>${c.q} → ${c.a}</div>`;
  });
}
function addCard(){
  cards.push({q:fc_q.value,a:fc_a.value});
  localStorage.setItem(key,JSON.stringify(cards));
  render();
}
render();
