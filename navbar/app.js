const lists = document.querySelector(".lists");
const menu = document.querySelector(".menu");

menu.addEventListener('click', ()=>{
    lists.classList.toggle('active');
})