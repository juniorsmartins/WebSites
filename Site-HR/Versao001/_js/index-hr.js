<!--
/*
  Autor: Junior Martins - https://juniormartins.46graus.com/
  Objetivo: Trabalho voluntário
  Cliente: Harrison Ribeiro - HR
  Descrição: Político - candidato a cargo eletivo
  Protocolo de Produção: 0020309-2020
*/

$(document).ready(function() {

  $("a.tooltip").mouseover(function(){
    var texto = $(this).attr('data-tooltip');
    $(this).children(".text_tooltip").html(texto);
    $(this).children(".text_tooltip").css('opacity', '1');    
  })

  $("a.tooltip").mouseout(function(){
    $(this).children(".text_tooltip").css('opacity', '0');
  });

  $(".text_tooltip").mouseover(function(e) {
    e.stopPropagation();
  });

  var page = $('body');
  $('a.tooltip').click(function() {
    page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });

  $("nav").mouseover(function() {
    $(".nav-itens").addClass("nav-show");
  });
  $("nav").mouseout(function() {
    $(".nav-itens").removeClass("nav-show");
  });

  $(document).scroll(function(){
    var topWindow = $(window).scrollTop();
    if(topWindow > 60) {
      $("header").addClass('header_fixed');
    } else {
        $("header").removeClass('header_fixed')
    };
  });


});



//-->