(function () {
  let q = app.getComponente('q1');
  q.carregar = function() {
    let strHtml = ` <h1>Questão 01</h1>
    <p>Calcular quantos númmeros existem entre valor mínimo e valor máximo (exclusives) informados que sejam múltiplos de 2 e 3 simultaneamente.</p>
    <form action="#" onsubmit="app.q1.$ctrl.onSubmit(); return false;">
    <label for="min">Valor mínimo:</label><br>
    <input type="number" id="min" name="min" required>
    <br>
    <label for="max">Valor máximo:</label><br>
    <input type="number" id="max" name="max" required><br>
    <input name="calcular" type="submit" value="Calcular">
    <div id="resultado"></div>
    </form> `;
    $('#questao > div').fadeToggle(function(){
      $('#questao').html(strHtml);
      $('#questao > div').fadeIn();
    });

    q.$ctrl = {
      onSubmit: function() {
        let min = $('#min');
        let max = $('#max');
        let minValue = min.val();
        let maxValue = max.val();

        if (minValue > maxValue) {
          alert("O valor mínimo é maior que o valor máximo.");
          min.focus();
          return;
        }

        let resultado = multiplos2Valores(minValue, maxValue);
        $('#resultado').html(`Total de múltiplos é ${resultado}`);
      }
    }

    function multiplos2Valores(n1, n2){
      var r = 0;
      var temp = [];

      for (var i = n1; i < n2; i++) {
        if (i%2 == 0 && i%3 == 0) {
          if (i != n1 && i != n2) {
            temp.push(i);
            r++
          }
        }
      }
      return r;
    }

    console.log(app);
  };





})();
