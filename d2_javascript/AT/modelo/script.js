(function (){
  var imagens = ['img/facebook.png','img/android.png','img/chrome.png','img/firefox.png','img/html5.png','img/googleplus.png','img/twitter.png','img/windows.png','img/cross.png'];
  var imgPares = imagens.concat(imagens).sort();
  var start = false, click = 0, face = "";
  var contagem = 0, intervalo;
  var storage = window.localStorage;

  app.tabuleiro = function(imagens) {
    let cards = "";
    imgPares.splice($.inArray('img/cross.png', imgPares),2);
    for (var i = 0; i < 16; i++) {
      cards += ` <div id="${i}" class="carta virada" onclick="app.virarCarta($(this));">
                    <div class="face"><img src="${imgPares[i]}"></div>
                    <div class="verso"><img src="${imagens[8]}"></div>
                  </div>`;
    }
    $('#container').html(cards);
  }

  app.start = function(btn) {
    btn.html('Reiniciar');
    if(!start) {
      let imgRandon = imgPares.sort(function(){return 0.5 - Math.random()});
      $('#tabuleiro .carta .face img').each(function(i){
        $(this).attr("src",imgRandon[i]);
      });
      setTimeout(function(){
        $('#tabuleiro .carta').removeClass('virada');
        start = true;
        cronometro($('#tempo'));
      }, 3000);
    } else {
      location.reload();
    }
  }

  app.rank = function(){
    var dbb = storage.getItem('db');
    window.alert(`Melhor tempo atual é: ${dbb}`);
  };

  function win(int) {
    if (int === 8) {
      window.alert("Fim de Jogo!")
      clearInterval(intervalo);
      var novoTempo = $('#tempo').text();
      save(novoTempo);
      location.reload();
    }
  }

  function comparaCartas(carta, click) {
    let r = false;
    if (click === 0){
      face = carta.children('.face').children().attr('src');
      carta.addClass("tentativa");
    } else if (click === 1) {
      if(face === carta.children('.face').children().attr('src')) {
        r = true;
      }
      carta.addClass("tentativa");
    }
    return r;
  }

  function save(novoTempo) {
      var dbb = storage.getItem('db');
      if(dbb == null) {
        storage.setItem('db', novoTempo);
      } else {
        if(novoTempo < dbb ) {
          storage.setItem('db', novoTempo);
        }
      }
  }

  function cronometro(element) {
    var dateInicial = new Date();
    intervalo = setInterval(function() {
      var dateAtual = new Date();
      var contador = new Date(dateAtual - dateInicial);
      var minutoAtual = (contador.getMinutes() <= 9) ? `0${contador.getMinutes()}` : `${contador.getMinutes()}`;
      var segundotual = (contador.getSeconds() <= 9) ? `0${contador.getSeconds()}` : `${contador.getSeconds()}`;
      element.html(minutoAtual + ":" + segundotual);
    }, 1000);
  }

  app.virarCarta = function(carta) {
    if (start) {
      carta.addClass("virada").fadeIn(1000);
        if(comparaCartas(carta,click)) {
          $('#tabuleiro .tentativa').each(function(i){
            $(this).removeClass('tentativa').fadeIn(1000);
          });
          click = 0;
          contagem ++;
          setTimeout(function(){ win(contagem) }, 800);
        } else {
          if (click == 1){
            start = false;
            setTimeout(function(){
              $('#tabuleiro .tentativa').each(function(i){
                $(this).removeClass('tentativa').removeClass('virada').slideDown("slow");
              });
              start = true;
            }, 1500);
            click = 0;
          } else {
            click ++;
          }
        }
    }
  }

  app.inicio = function() {
    var strHtml = `<div id="hud" class="hud">
                    <div class="container">
                      <button onclick="app.start($(this));" class="btn" type="button">Iniciar</span></button>
                      <button onclick="app.rank();" class="btn btn-secondary" type="button">Melhor Tempo</span></button>
                      <div id="tempo" class="tempo">00:00</div>
                    </div>
                  </div>
                  <div id="container" class="container"></div>`;
    $('#tabuleiro').html(strHtml);
    app.tabuleiro(imagens);
  }
})();
$( document ).ready(function() {
  app.inicio();
});
