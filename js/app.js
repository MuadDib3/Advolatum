function toggleBurger () {
   document.body.classList.toggle("no-scroll");
   // document.documentElement.classList.toggle("no-scroll");
   const burger = document.getElementById('header-nav-burger');
   burger.classList.toggle('nav-burger_active');
   // burger.classList.toggle('nav-burger_closed');
}