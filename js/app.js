function showBurger () {
   // document.body.classList.toggle("no-scroll");
   document.documentElement.classList.add("no-scroll");
   const burger = document.getElementById('header-nav-burger');
   burger.classList.add('nav-burger_active');
   burger.classList.remove('nav-burger_closed');
}

function hideBurger () {
   // document.body.classList.toggle("no-scroll");
   document.documentElement.classList.remove("no-scroll");
   const burger = document.getElementById('header-nav-burger');
   burger.classList.remove('nav-burger_active');
   burger.classList.add('nav-burger_closed');
}