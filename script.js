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

  const menuBtn = document.getElementById('open-menu-btn');
  const menu = document.querySelector('.menu-mobile');
  const closeMenu = document.getElementById('close-menu-btn');
  menuBtn.addEventListener('click', () => menu.style.display = 'flex')
  closeMenu.addEventListener('click', () => menu.style.display = 'none')