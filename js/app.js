function showBurger () {
   document.documentElement.classList.add("no-scroll");
   const burger = document.getElementById('header-nav-burger');
   burger.classList.add('nav-burger_active');
   burger.classList.remove('nav-burger_closed');
}

function hideBurger () {
   document.documentElement.classList.remove("no-scroll");
   const burger = document.getElementById('header-nav-burger');
   burger.classList.remove('nav-burger_active');
   burger.classList.add('nav-burger_closed');
}


function openCard () {
   const scrollLockPadding = window.innerWidth - document.body.offsetWidth + 'px';
   document.body.style.paddingRight = scrollLockPadding;
   const cardWrapper = document.getElementById('card-wrapper');
   cardWrapper.classList.add('wrapper-product_opened');
   document.documentElement.classList.add("no-scroll");
   cardWrapper.addEventListener('click', function(e) {
      if (!e.target.closest('.product')) {
         cardWrapper.classList.remove('wrapper-product_opened');
         document.documentElement.classList.remove("no-scroll");
      }
   })
}

function closeCard () {
   const cardWrapper = document.getElementById('card-wrapper');
   cardWrapper.classList.remove('wrapper-product_opened');
   document.documentElement.classList.remove("no-scroll");
}

const openProductCard = document.querySelectorAll ('.open-product-card');
for (let i = 0; i < openProductCard.length; i ++) {
   thisProductCard = openProductCard[i];
   thisProductCard.addEventListener("click", openCard);
}
