







jQuery(document).ready(function($) {
    $('.slider').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
         breakpoint: 400,
         settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }]
  });
});


// $(function() {
 
//     $(".slider").slick({
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       arrows: true,
//     });
    
//     $(".filter li").on('click', function(){
//       var filter = $(this).data('filter');
//       $(".slider").slick('slickUnfilter');
      
//       if(filter == 'red'){
//         $(".slider").slick('slickFilter','.red');
//       }
//       else if(filter == 'yellow'){
//         $(".slider").slick('slickFilter','.yellow');
//       }
//       else if(filter == 'blue'){
//         $(".slider").slick('slickFilter','.blue');
//       }
//       else if(filter == 'all'){
        
//         $(".slider").slick('slickUnfilter');
//       }
      
//     })
    
//   });
  