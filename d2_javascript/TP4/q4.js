/**
  * Crie um componente que possua 3 caixas de texto que só aceitam números e
  * tenha os rótulos (label) Quantidade de números, valor mínimo e valor máximo.
  * O componente deve ainda possuir um botão calcular que quando acionado deve
  * criar um array com quantidade de números aleatórios não repetidos e ordená-los.
  * Os números devem estar entre valor mínimo e valor máximo (inclusives, ou seja
  * incluindo o valor mínimo e valor máximo). Lembre-se que para calcular quantidade
  * de números deve ser menor que a soma de valor mínimo e valor máximo.
  */
(function(){
  console.log("Questao 4");

  function createInputElement(type, id, name, textLabel, parent, required) {
    var label = document.createElement("label");
    label.setAttribute('for',id);
    label.innerHTML = textLabel + '<br>';

    var input = document.createElement("input");
    input.setAttribute('type', type);
    input.setAttribute('id',id);
    input.setAttribute('name',name);
    if(required) {
      input.setAttribute('required', 'required');
    }

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
    form.setAttribute('id',"form4");
    // valor mínimo
    createInputElement('number','fqtd','fqtd','Quantidade de números:',form, true);
    breakRow(form);

    createInputElement('number','fmin','fmin','Valor mínimo:',form, true);
    breakRow(form);

    createInputElement('number','fmax','fmax','Valor máximo:',form, true);
    breakRow(form);

    // botao
    createButton("criar", "button", "Calcular", form);
    // Insere o form no documento
    document.getElementById('q4').appendChild(form);
  }

  function compareAndPush(a, n) {
    b = false;
    // Se o array estiver vazio, adiciona um novo elemento
    // Caso o array não esteja vazio verifica se o novo número já existe
    if (a.length <= 0) {
      a.push(n);
    } else {
      for (var i = 0; i <= a.length; i++) {
        if (a[i] == n) b = true;
      }

      if (b == false) {
        a.push(n);
      }
      b = false;
    }
    return a;
  }

  function randonNumbers(min, max) {
    return Math.floor(Math.random() * ((max+1) - min)) + min;
  }

  // $tam => Quantidade máxima de elementos no Array
  // $min => Define o valor mínimo do range de número aleatórios
  // $min => Define o valor máximo do range de número aleatórios
  function createArray(tam, min, max){
    var v = [];
    while(v.length < tam){
      var newInt = randonNumbers(min, max);
      v = compareAndPush(v, newInt);
    }
    return v;
  };

  // sortNumbers recebe um array como parametro
  function sortAsc(arr) {
    let t = arr.length;
    var temp;

    for (var i = 0; i <= t; i++) {
      for (var j = 0; j < t; j++) {
        // compara se o elemento atual é maior que o seguinte
        if (arr[j] > arr[j+1]) {
          // armazena o elemento atual
          temp = arr[j];
          // substitui o elemento atual pelo seguinte
          arr[j] = arr[j+1];
          // recupera o valor atual e substitui no seguinte
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  }

  function createAndSort(tam, min, max){
    let n = sortAsc(createArray(tam, min, max));
    return n;
  }

  //console.log(createAndSort(1000, 0, 5000).toString() + "\n");

  return (function(){
    createForm();
    var send = document.getElementsByName('criar');

    send[0].onclick = function() {
      var fqtd = document.querySelector('#fqtd');
      var fmin = document.querySelector('#fmin');
      var fmax = document.querySelector('#fmax');

      if (fqtd.value && fmin.value && fmax.value) {
        var qtd = parseInt(fqtd.value, 10);
        var min = parseInt(fmin.value, 10);
        var max = parseInt(fmax.value, 10);

        var resposta = createAndSort(qtd, min, max).toString();
        var msg = document.createElement("div");
        document.getElementById('q4').appendChild(msg).innerHTML = resposta;
      } else {
        alert("Um dos valores está vazio!");
      }
    }

  })();

})();





