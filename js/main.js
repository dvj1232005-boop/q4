const p=new URLSearchParams(location.search);
const bai=p.get("bai");
const d=map[bai];

title.innerText=d.title;
pdf.src=`pdf/msutong4.pdf#page=${d.page}&zoom=page-width`;

if(d.audio) audio.src=d.audio;

note.value=localStorage.getItem("note_"+bai)||"";

function saveNote(){
  localStorage.setItem("note_"+bai,note.value);
  alert("Đã lưu");
}
function markDone(){
  localStorage.setItem("done_"+bai,true);
  alert("Đã đánh dấu");
}
function toggleMode(){
  document.body.classList.toggle("dark");
}
