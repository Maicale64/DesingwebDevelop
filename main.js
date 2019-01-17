
$(function(){

var windowHeight = $(window).height();
var barraAltura  = $('.barra').innerHeight();
  
 
$(window).scroll(function(){
var scroll = $(window).scrollTop();
  if(scroll > windowHeight){
  $('.barra').addClass('fixed');
    
   $('body').css({'margin-top':barraAltura+'px'});  
    
  }else{
  $('.barra').removeClass('fixed');
     $('body').css({'margin-top':'0px'}); 
  }
}); 
  
$('.menu-movil').on('click', function(){
$('.navegacion-principal').slideToggle();
});  
  
});
