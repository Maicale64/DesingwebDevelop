
$(function(){

var windowHeight = $(window).height();
var barraAltura  = $('.barra').innerHeight();
  
 
$(window).scroll(function(){
var scroll = $(window).scrollTop();
  if(scroll > windowHeight){
  $('.barra').addClass('fixed');
  }else{
  $('.barra').removeClass('fixed');
  }
}); 
  
$('.menu-movil').on('click', function(){
$('.navegacion-principal').slideToggle();
});  
  
});
