
$(function(){
var windowHeight = $(window).height();
var barraAltura  = $('.barra').innerHeight();
  
console.log(barraAltura);  
$(window).scroll(function(){
var scroll = $(window).scrollTop();
  if(scroll > windowHeight){
  coonsole.log("ya rebasaste la altura de la pantalla");
  }else{
  console.log("Aun no xd");
  }
});  
  
$('.menu-movil').on('click', function(){
$('.navegacion-principal').slideToggle();
});  
  
});
