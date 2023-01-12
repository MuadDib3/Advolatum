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

function openCard () {
   const cardWrapper = document.getElementById('card-wrapper');
   cardWrapper.classList.add('wrapper-product_opened');
   document.documentElement.classList.add("no-scroll");
   // document.body.classList.add("no-scroll");
}

function closeCard () {
   const cardWrapper = document.getElementById('card-wrapper');
   cardWrapper.classList.remove('wrapper-product_opened');
   document.documentElement.classList.remove("no-scroll");
   // document.body.classList.add("no-scroll");
}

const openProductCard = document.querySelectorAll ('.open-product-card');
for (let i = 0; i < openProductCard.length; i ++) {
   thisProductCard = openProductCard[i];
   thisProductCard.addEventListener("click", openCard);
}