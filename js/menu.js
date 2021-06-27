const ambuergesa = document.querySelector('.ambuergesa')
const menu = document.querySelector('.menu-navegacion')


// console.log(ambuergesa);
// console.log(menu)

ambuergesa.addEventListener('click',()=>{
      menu.classList.toggle("spread")
})



window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
         && e.target !=menu && e.target != ambuergesa   ){
        menu.classList.toggle("spread")
    }
})