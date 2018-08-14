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
    var local = document.getElementById('q1');
    local.innerHTML = ` <form method="post">
                        <label for="min">Valor mínimo:</label><br>
                        <input type="number" id="min" name="min">
                        <br>
                        <label for="max">Valor máximo:</label><br>
                        <input type="number" id="max" name="max"><br>
                        <button name="calcular" type="button" onsubmit="app.q1.calcular(this);">Calcular</button>
                        <p id="resultado"></p>
                        </form> `;

  }

  q.calcular = function(obj) {
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Total de múltiplos é ' + multiplos2Valores(min, max);
    return false;
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




