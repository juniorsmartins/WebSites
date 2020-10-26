/* ----------------------------------------------------------------------------------------------------------------------------- */
/* JavaScript Geral */





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


