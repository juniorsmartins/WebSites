/* ----------------------------------------------------------------------------------------------------------------------------- */
/* Slider Automático */

var satual = 1;
var smax = 4;
var stmp = 3000;

function troca() {
  document.getElementById("b1").style.visibility="hidden";
  document.getElementById("b2").style.visibility="hidden";
  document.getElementById("b3").style.visibility="hidden";
  document.getElementById("b4").style.visibility="hidden";

  document.getElementById("b"+satual).style.visibility="visible";
  satual = satual + 1;

  if (satual > smax) {
    satual = 1;
  }
}

function slider() {
  document.getElementById("b1").style.visibility="hidden";
  document.getElementById("b2").style.visibility="hidden";
  document.getElementById("b3").style.visibility="hidden";
  document.getElementById("b4").style.visibility="visible";

  sliderTimer=setInterval(troca,stmp);
}



/* ----------------------------------------------------------------------------------------------------------------------------- */
/* Galeria com botões */

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

