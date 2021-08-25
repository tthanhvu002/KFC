const checkbox = document.querySelector('.remember-account__checkbox');
const checkIcon = document.querySelector('.check-icon');

checkbox.onclick = function () {
    checkIcon.classList.toggle('active');
}


const modal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login');
const closeBtn = document.querySelector('.close');
const loginForm = document.querySelector('.login-form');
loginBtn.onclick = function () {
    modal.classList.add('active');
    loginForm.classList.add('active');
}

closeBtn.onclick = function () {
    modal.classList.remove('active');
    loginForm.classList.remove('active');
}


const btns = document.querySelectorAll('.slide-btn');
const imgFirst =document.querySelector('.first');

const slide = document.querySelectorAll('.slide');
const slides = document.querySelector('.slides');
slides.style.width = 100*(slide.length ) + '%';


for(let i=0;i<btns.length;i++){
    btns[i].onclick = function () {
        imgFirst.style.marginLeft = - 20 * i + '%';
    }
}

const menuItemIcon = document.querySelectorAll('.menu__item-info__des-icon');

const menuItemDes = document.querySelectorAll('.menu__item-info__des');

const menuItemDes2 = document.querySelectorAll('.menu__item-info__des-item.des-2')

for(let i=0;i<menuItemIcon.length;i++) {
    menuItemIcon[i].onclick = function () {
        menuItemDes2[i].classList.toggle('active');
        menuItemDes[i].classList.toggle('active');
    }
}

const menuItemBtnMb = document.querySelectorAll('.menu-mb-item');
const listOptionMb = document.querySelectorAll('.list-option');


for(let i=0;i<menuItemBtnMb.length;i++) {
    menuItemBtnMb[i].onclick = function () {
        listOptionMb[i].classList.toggle('active');
        
    }
}

const menuMbBtn = document.querySelector('.mobile-btn');
const menuMb = document.querySelector('.mobile-menu');

const closeMbBtn = document.querySelector('.menu-close');

closeMbBtn.onclick = function () {
    menuMb.classList.toggle('active');
}
menuMbBtn.onclick = function (e) {
    menuMb.classList.toggle('active');
    
}
    