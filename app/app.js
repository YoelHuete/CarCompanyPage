const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  // Color picker

  function changeCar(imageSrc, modelName, price) {
    // update the car image
    document.getElementById('car-image').src = imageSrc;
    // update the car model name
    document.getElementById('car-model').innerText = modelName;
    // update the car price
    document.querySelector('.price').innerText = price;
  }

  //Hamburguer menu

  $(document).ready(function() {
    var menuItems = $('#menuItems');
    var hamburgerMenu = $('.hamburger-menu');
  
    hamburgerMenu.on('click', function() {
      menuItems.slideToggle();
      hamburgerMenu.toggleClass('active');
    });
  });