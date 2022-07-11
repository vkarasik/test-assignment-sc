function burgerMenu() {
  const burger = document.querySelector('.nav__burger');
  const navList = document.querySelector('.nav__list');
  const navItems = document.querySelectorAll('.nav__item');

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('nav__burger_open');
    navList.classList.toggle('nav__list_active');

    navItems.forEach((item, index) => {
      if (item.style.animation == '') {
        item.style.animation = `fade-links 1s ease forwards ${index / 7}s`;
      } else {
        item.style.animation = '';
      }
    });
  });
}

export default burgerMenu;
