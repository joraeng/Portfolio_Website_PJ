'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // navbar의 크기보다 스크롤 된 크기가 더 크면 navbar를 진하게 해줄 클래스 추가
    // navbar의 크기보다 스크롤 크기가 더 작아지면 다시 클래스를 지워서 투명 상태가 되도록
    if (window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});


// Handdle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    // 클릭을 한 요소의 링크를 변수에 저장한다
    if(link == null){
        return ;
    }
    

    const scrollTo = document.querySelector(link);
    // 클릭한 요소의 data-link 값을 받아와서 scrollTo에 저장
    //scrollTo(element)가 내장하는 함수를 사용. 해당 함수의 내용은 모르지만
    // 해당 값을 가진 ID가 있는 곳으로 넘어가는 함수인 듯 하다
    scrollTo.scrollIntoView({behavior: "smooth"});
});
// Handdle click on "contact me" button on home
const contactbtn = document.querySelector('.home__contact');
contactbtn.addEventListener('click', () =>{
    scrollIntoView('#contact')
});

// Make home slowly fade to trasnparaent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY/homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight /2 ) {
        arrowUp.classList.add('visible');
    }else {
        arrowUp.classList.remove('visible');
    }
})
// Handdle click on the "arrow up" button
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#home');
});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

