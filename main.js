const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('ul');
const menuItems = document.querySelectorAll('ul > li > a');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

menuItems.forEach(item => {
  item.addEventListener('click', function (e) {
    const submenu = this.nextElementSibling;

    if (submenu && submenu.classList.contains('submenu')) {
      e.preventDefault(); 
      this.parentElement.classList.toggle('show-submenu');
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('show');
  }
});
