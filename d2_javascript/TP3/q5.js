/**
  * Crie um componente que possua 3 caixas de texto que só aceitam números e
  * tenha os rótulos (label) lado A, lado B e lado C. O componente deve ainda
  * possuir um botão calcular que quando acionado deve dizer se um triângulo
  * formado por esses 3 lados é um triângulo equilátero, isósceles ou escaleno.
 */
 (function(){
  console.log("Questao 5");

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
    createInputElement('number','a','a','Lado A:',form);
    breakRow(form);

    createInputElement('number','b','b','Lado B:',form);
    breakRow(form);

    createInputElement('number','c','c','Lado C:',form);
    breakRow(form);

    // botao
    createButton("triangular", "button", "Calcular", form);
    // Insere o form no documento
    document.getElementById('q5').appendChild(form);
  }

  function tri(x,y,z) {
    var temp = 0;
    var arr = [x,y,z];
    var r;

    for (var i = 0; i < arr.length; i++) {
      for (j = i; j <= arr.length -1; j++) {
          if (arr[i] === arr[j]) {
            temp = temp + 1;
        }
      }
    }

    switch (temp) {
      case 3 :
        r = "escaleno\n";
        break;
      case 4 :
        r = "isósceles\n";
        break;
      case 6:
        r = "equilátero\n";
        break;
    }

    return r;
  }

  return (function(){
    createForm();
    var send = document.getElementsByName('triangular');

    send[0].onclick = function() {
      var a = document.querySelector('#a');
      var b = document.querySelector('#b');
      var c = document.querySelector('#c');

      var aSide = parseInt(a.value, 10);
      var bSide = parseInt(b.value, 10);
      var cSide = parseInt(c.value, 10);

      if (aSide && bSide && cSide) {
        var resposta = tri(aSide, bSide, cSide);
        var msg = document.createElement("div");
        document.getElementById('q5').appendChild(msg).innerHTML = resposta;
      } else {
        alert("Está faltando o valor de um dos lados!");
      }
    }

  })();

})();




