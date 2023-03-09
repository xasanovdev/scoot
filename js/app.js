const accardion = document.querySelectorAll('.faq__wrapper-accardion');
const buttons = document.querySelectorAll('.faq__wrapper-accardion__title');
const hamburgerMenu = document.querySelector('.hamburger__button');
const navigationBar = document.querySelector('.navigation-bar');
const hamburgerReset = document.querySelector('.x__button');

hamburgerMenu.addEventListener('click',function() {
    navigationBar.classList.add('active');
    document.body.style.overflowY = 'hidden';
    hamburgerMenu.classList.add('active');
})
hamburgerReset.addEventListener('click',function() {
    navigationBar.classList.remove('active');
    hamburgerMenu.classList.remove('active');
    document.body.style.overflowY = 'scroll';
})

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',function() {
        accardion[i].classList.toggle('active');
        // if(accardion[i].classList.contains('active')) {
        //     accardion[i].classList.remove('active');
        // } else {
        //     accardion[i].classList.add('active');
        // }
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});


var myVar;

function loaderFunction(){
    myVar = setTimeout(showPage,1000);
}

function showPage() {
    document.querySelector(".loader__container").style.display = "none";
    document.querySelector(".body").style.display = "block";
    document.body.style.overflowY = 'scroll';
}

