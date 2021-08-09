$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 5,
      margin: 100,
      loop: true,
      nav: true,
      responsive:{
        0:{
          items:1
        },
        200:{
          items:1
        },
        1220:{
          items:5
        }
      }
    });
    $(".next_button").click(function(){
        owl.trigger("next.owl.carousel");
      });
       
      $(".prev_button").click(function(){
        owl.trigger("prev.owl.carousel");
      });
  });

  const body = document.querySelector('.body');
  const menuBtn = document.getElementById('open-menu-btn');
  const menu = document.querySelector('.menu-mobile');
  const closeMenu = document.querySelector('.menu-mobile__close');
  menuBtn.addEventListener('click', () => {
      menu.style.width = '100%'; 
      body.style.position='fixed'; 
      body.style.width = '100%'; 
      closeMenu.style.position='fixed'; 
      closeMenu.style.width='15%'
  })
  closeMenu.addEventListener('click', () => {
      menu.style.width = '0'; 
      body.style.position=''; 
      closeMenu.style.position=''; 
      closeMenu.style.width='100%'
  })
