
$(function(){
$(window).scroll(function(){
var scroll = $(window).scrollTop();
  console.log(scroll);
}); 
  
$('.menu-movil').on('click', function(){
$('.navegacion-principal').slideToggle();
});  
  
});
