// first slide
// $('.slider-one').slick({
//     autoplay:true,
//     autoplaySpeed:3000

// } );


// $(document).ready(function(){       
//     $('.slider-one').slick({
//       dots: true,
//       infinite: true,
//       speed: 500,
//       fade: true,
//       slide: '> div',
//       cssEase: 'linear'
//     });
        
//             });
//console.log("saihsahsu");


$(document).ready(function(){       
    $('.slider-one')
    .not(".slick-initialized")
    .slick({
      dots: true,
      infinite: true,
      speed: 500,
     autoplay:true,
       autoplaySpeed:2000,
       prevArrow:".site-slider .slider-btn .prev",
       nextArrow:".site-slider .slider-btn  .next"
    });  });



 $(document).ready(function(){       
   $('.slider-2')
   .not(".slick-initialized")
   .slick({
      
      prevArrow:".side-slider-2 .prev1",
      nextArrow:".side-slider-2 .next1",
      slidesToShow:3,
      slidesToScroll:2,
      autoplaySpeed:3000,
      
      

   });
        
           });