/* ----------------------------------------------------------------------------------------------------------------------------- */
/* JavaScript Geral */



/* ---------------------- Início Galeria de Fotos */
var slideIndex = 1;
showSlides(slideIndex);

function muda_Foto(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("fotos_Galeria");

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


