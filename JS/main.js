//FOOTER
const footerTxt = document.getElementById('footer-text');
let date = new Date;
let currentYear = date.getFullYear();
footerTxt.textContent = `© 2024-${currentYear} SqrtBlogs`;