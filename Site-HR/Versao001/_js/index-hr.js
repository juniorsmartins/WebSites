<!--
/*
  Autor: Junior Martins - https://juniormartins.46graus.com/
  Objetivo: Trabalho voluntário
  Cliente: Harrison Ribeiro - HR
  Descrição: Político - candidato a cargo eletivo
  Protocolo de Produção: 0020309-2020
*/

$(document).ready(function() {
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