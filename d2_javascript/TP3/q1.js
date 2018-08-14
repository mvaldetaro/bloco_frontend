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

  function createInputElement(type, id, name, textLabel, parent) {
    var label = document.createElement("label");
    label.setAttribute('for',id);
    label.innerHTML = textLabel + '<br>';

    var input = document.createElement("input");
    input.setAttribute('type', type);
    input.setAttribute('id',id);
    input.setAttribute('name',name);

    parent.appendChild(label);
    parent.appendChild(input);
  }

  function createButton(name, type, text, parent) {
    var btn = document.createElement("button");
    btn.setAttribute('name',name);
    btn.setAttribute('type',type);
    btn.innerHTML = text;

    parent.appendChild(btn);
  }

  function breakRow(parent) {
    var br = document.createElement("br");
    parent.appendChild(br);
  }

  function disableButton(form) {
    var inMin = form.elements[0];
    var inMax = form.elements[1];
    var btn = form.elements[2];

    btn.disabled = true;

    inMax.oninput = function(){
      if (parseInt(inMin.value, 10) >= parseInt(inMax.value, 10)) {
        btn.disabled = true;
        console.info("O valor máximo é menor que o valor mínimo.");
      } else {
        btn.disabled = false;
      }
    }

  }

  function createForm(){
    var form = document.createElement("form");
    form.setAttribute('method',"post");
    // valor mínimo
    createInputElement('number','min','min','Valor mínimo:',form);
    breakRow(form);
    // valor máximo
    createInputElement('number','max','max','Valor máximo:',form);
    breakRow(form);
    // botao
    createButton("calcular", "button", "Calcular", form);
    // Insere o form no documento
    document.getElementById('q1').appendChild(form);
    // verifica se o valor max é mior que o min
    disableButton(form);
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

    var send = document.getElementsByName('calcular');

    send[0].onclick = function() {
      var minValue =  document.querySelector('#min');
      var maxValue = document.querySelector('#max');
      min = parseInt(minValue.value, 10);
      max = parseInt(maxValue.value, 10);

      // verifica, contabiliza e exibe os multiplos de 2 e 3
      if (min && max ) {
        if (min < max) {
          var resposta = multiplos2Valores(min, max);
          var msg = document.createElement("div");
          document.getElementById('q1').appendChild(msg).innerHTML = "Total de múltiplos é " + resposta;
        } else {
          alert("Valor mínimo é maior que o valor máximo");
        }
      } else {
        alert("Falta um valor!");
      }

    }

  })();

})();




