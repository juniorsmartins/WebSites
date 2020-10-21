function iniciaSlider() {
  max = 4;
  min = 1;
  carregaFoto("_imgs/foto1.png");
}

function carregaFoto(foto) {
  document.getElementById("moldura").style.backgroundImage="URL("+foto+")";
}



