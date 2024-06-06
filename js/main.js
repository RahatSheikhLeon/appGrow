 
$(document).ready(function(){
    // header-toggle-content
   
    $(".h-bars, .ans").click(function (){
      $(".phone-responsive, .faq-ans").slideDown(500)
    })
    $(".menu-close, .close-data-faq").click(function (){
      $(".phone-responsive, .faq-ans").slideUp(300)
    })
   
   });