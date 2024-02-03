//FOOTER
const footerTxt = document.getElementById('footer-text');
let date = new Date;
let currentYear = date.getFullYear();
footerTxt.textContent = `© 2024-${currentYear} Sopata's Blog`;

// MENU BUTTON UTILITY
const menuBtn = document.getElementById('menu-btn');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
let isOn = false;

function changeBtn() {
    if(!isOn) {
        isOn = true;
        line2.style.opacity = '0';
        line1.style.transform = 'translateY(0.25em) rotate(45deg)';
        line3.style.transform = 'translateY(-0.25em) rotate(315deg)';
    } else {
        isOn = false;
        line2.style.opacity = '1';
        line1.style.transform = 'translateY(-0.25em) rotate(0)';
        line3.style.transform = 'translateY(0.25em) rotate(0)';
    }
}

menuBtn.addEventListener('click', changeBtn);

// MOBILE MENU
const menu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});