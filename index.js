const dark = document.querySelector(".page_1_light");
const darkBtn = document.querySelector(".btn_light_theme");
const a = document.querySelectorAll('a');
console.log(a);

darkBtn.addEventListener('click', () => {
    dark.classList.toggle('page_1_dark');
    
})