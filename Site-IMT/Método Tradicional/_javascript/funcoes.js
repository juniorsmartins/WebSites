/* Autor: Junior Martins - https://juniormartins.46graus.com/ */
/* Cliente: Instituto Mato-grossense de Tênis - IMT */
/* Descrição: Entidade sem fins lucrativos de fomento do desporto Tênis */
/* Objetivo: Trabalho voluntário para o fortalecimento da entidade */
/* Protocolo: 012007-2020 */


/* ------------------------------------------------------------------------------------------------------------------------------------- */


      var quebrada = false;
      function interageLogotipo(tipo){
        if (tipo == 1){
          arquivo="_img/logo2.png";
        }
        if (tipo == 2){
          arquivo="_img/logo1.png";
        }
        if (tipo == 3){
          arquivo="_img/logo5.png";
        }
        if (!quebrada){
          document.getElementById("logoimt").src=arquivo;
          if (tipo == 3){
            quebrada = true;
          }
        }
      }
      function arteMenu(foto){
        document.getElementById("icone").src = foto;
      }




