/**
 * Crie um componente que tenha duas caixas de texto que
 * só aceitam números e tenha os rótulos (label) valor mínimo e valor máximo,
 * checando sempre se o valor mínimo é menor que o valor máximo.
 * O componente deve ainda possuir um botão calcular que quando acionado deve
 * contar e imprimir quantos números existem entre valor mínimo e valor máximo (exclusives*)
 * que sejam múltiplos de 2 e 3 simultaneamente. Não deve ser possível calcular
 * se faltar algum dos números.
 */
 (function(){
  console.log("Questao 1");

  let q = app.getComponente('q1');
  function createForm(){
    let strHtml = ` <form method="post">
                    <label for="min">Valor mínimo:</label><br>
                    <input type="number" id="min" name="min" required>
                    <br>
                    <label for="max">Valor máximo:</label><br>
                    <input type="number" id="max" name="max" required><br>
                    <button name="calcular" type="submit" onsubmit="app.q1.calcular(this); return false;">Calcular</button>
                    <p id="resultado"></p>
                    </form> `;
  $('#q1').html(strHtml);
  }

  q.calcular = function(obj) {
    let min = $('#min').val();
    let max = $('#max').val();
    $('#resultado').html('Total de múltiplos é ' + multiplos2Valores(min, max));
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

  return (function(){
    createForm();
  })();

})();




