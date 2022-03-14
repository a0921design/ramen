$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 800;
    var href = $(this).attr("href");
    var gap = 40;
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust - gap;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});