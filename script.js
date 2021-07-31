$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 5,
      margin: 100,
      loop: true,
      nav: true
    });
    $(".next_button").click(function(){
        owl.trigger("next.owl.carousel");
      });
       
      $(".prev_button").click(function(){
        owl.trigger("prev.owl.carousel");
      });
  });
  