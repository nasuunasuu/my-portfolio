const openBtn=document.getElementById('modal-open-btn1')
const closeBtn=document.getElementById('modal-close-btn1')
const content=document.getElementById('modal-content1')

openBtn.addEventListener('click',()=>{
    content.style.display='block'
})

closeBtn.addEventListener('click',()=>{
    content.style.display='none'
})