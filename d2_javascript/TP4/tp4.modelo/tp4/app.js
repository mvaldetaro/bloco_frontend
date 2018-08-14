(function() {
  var nrQuestoes = 0;
  app.getComponente = function(nome) {
    if (!app[nome]) {
      app[nome] = {};
      app[nrQuestoes++] = nome;
    }
    return app[nome];
  };

  var indiceQuestaoAtual = -1;
  app.mudarQuestao = function(direcao) {
    try {
      if (direcao !== 1 && direcao !== -1)
        throw ("Você não deveria estar chamando essa funcão.");
      let proxima = direcao === 1 ? true : false;
      let indiceSolicitado = proxima ? indiceQuestaoAtual + 1 : indiceQuestaoAtual - 1;
      if (!app[indiceSolicitado]) {
        throw ("Essa questão não existe");
      }
      if (indiceSolicitado < 0) {
        throw ("Nenhuma questão foi selecionada.");
      }

      let nomeComponente = app[indiceSolicitado];

      if (!app[nomeComponente].carregar) {
        throw ("Não foi possível encontrar o método carregar no seu componente.");
      }
      console.log(`carregando ${nomeComponente}`);
      app[nomeComponente].carregar();
      indiceQuestaoAtual = indiceSolicitado;
    } catch (e) {
      console.warn(e);
    }
  };

  $.ready = function() {

    $('#questao').html(`
      <div id="iniciar" class="layout-row layout-align-center-center" style="height:100%;width:100%;">
        <button onclick="$('section>button').show(),app.mudarQuestao(1)" class="md-raised md-primary md-button md-ink-ripple" type="button" ng-transclude="" style="color: rgba(255,255,255,0.87); background-color: rgb(16,108,200);">
          <span class="ng-scope">Ver Questões</span>
          <div class="md-ripple-container"></div>
        </button>
      </div>
    `);
    $('section>button').hide();
  };

})();
