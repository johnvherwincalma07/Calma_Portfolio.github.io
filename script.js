function like(btn){
  let span=btn.parentElement.querySelector('.likes');
  if(span) span.innerText++;
}

setInterval(()=>{
  document.querySelectorAll('.score').forEach(el=>{
    let t=+el.dataset.score;
    let v=+el.innerText;
    if(v<t) el.innerText=v+1;
  });
},30);

function openModal(text){
  modal.style.display='block';
  modalText.innerText=text;
}
function closeModal(){ modal.style.display='none'; }