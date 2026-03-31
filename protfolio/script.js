const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}
