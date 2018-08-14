/**
 * Crie um componente que tenha uma caixa de texto que só aceita números e tenha o rótulo (label) Calcular o fatorial de.
 * O componente deve ainda possuir um botão calcular que quando acionado deve calcular o fatorial do número digitado,
 * imprimido o resultado e o tempo necessário para a execução.
 * (Dica: usar o objeto javascript Date)
 * O resultado deve ser mostrado no formato 53! = XXXXXX (yyy milisegundos);
 * O código deve calcular o fatorial e não apenas imprimir uma string com a resposta.
 */
 (function(){
  console.log("Questao 2");

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

  function createForm(){
    var form = document.createElement("form");
    form.setAttribute('method',"post");
    // valor mínimo
    createInputElement('number','numero','numero','Calcular o fatorial de:',form);
    breakRow(form);
    // botao
    createButton("fatorial", "button", "Calcular", form);
    // Insere o form no documento
    document.getElementById('q2').appendChild(form);
  }

  function fatorial(n) {
    let msInicio = new Date().getTime();
    var f = 1;

    for(var i = 1; i <= n; i++){
      f = f*i;
    }

    let msFinal = new Date().getTime();
    let ms =  msFinal - msInicio;

    return n+"! = " + f + " ("+ms+ " milesegundos)\n";
  }

  return (function(){
    createForm();
    var send = document.getElementsByName('fatorial');

    send[0].onclick = function() {
      var v = document.querySelector('#numero');
      var n = parseInt(v.value, 10);
      if (n) {
        var resposta = fatorial(n);
        var msg = document.createElement("div");
        document.getElementById('q2').appendChild(msg).innerHTML = resposta;
      } else {
        alert("Insira um valor!");
      }
    }

  })();

})();




