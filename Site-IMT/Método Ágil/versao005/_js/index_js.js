<!--
/*
  Autor: Junior Martins - https://juniormartins.46graus.com/
  Objetivo: Trabalho voluntário
  Cliente: Instituto Mato-grossense de Tênis - IMT
  Descrição: entidade esportiva sem fins lucrativo
  Protocolo de Produção: 0010108-2020

*/

var imgs=[];
var sliderr;
var imgAtual;
var maxImg;
var tempo;

function preCarregamento(){ // Função de pré-carregamento das imagens
  var nome_imagem=1;
  for (var contador=1; contador<8; contador++){
    imgs[contador]=new Image();
    imgs[contador].src="_imgs/slider"+nome_imagem+".png";
    nome_imagem++;
  }
}

function carregarImg(img){
  sliderr.style.backgroundImage="url('"+imgs[img].src+"')";
}

function inicia(){
  preCarregamento();
  imgAtual=1;
  maxImg=imgs.length;
  sliderr=document.getElementById("dvslider");
  carregarImg(imgAtual);
  tempo=setInterval(troca,3000);
}

function troca(){
  imgAtual++;
  if (imgAtual>maxImg){
    imgAtual=1;
  }
  carregarImg(imgAtual);
}

window.addEventListener("load", inicia);


//-->