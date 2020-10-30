/* ----------------------------------------------------------------------------------------------------------------------------- */
/* JavaScript Geral */


/* ---------------------- Início Menu Hamburguer */
function menuOnClick() {
  document.getElementById("menu_Bar").classList.toggle("change");
  document.getElementById("nave").classList.toggle("change");
  document.getElementById("menu_Bg").classList.toggle("change_Bg");
}
/* ---------------------- Fim Menu Hamburguer */



/* ---------------------- Início Galeria de Fotos */
var slideIndex = 1;
showSlides(slideIndex);

// Próximo
function plusSlides(n) {
  showSlides(slideIndex += n);
  ga('send', 'event', 'galeria', 'next_prev', 'Titulo da página');
}

// Controle de Imagens
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
/* ---------------------- Fim Galeria de Fotos */



/* ---------------------- Início Modal Pop-Up */
function fun_Excluir() {
  document.getElementById("modal_Promocao").className += " mostrar";
}
function fun_Voltar () {
  document.getElementById("modal_Promocao").className =
    document.getElementById("modal_Promocao").className.replace
      ( /(?:^|\s)mostrar(?!\S)/g , '' );
}
/* ---------------------- Fim Modal Pop-Up */


