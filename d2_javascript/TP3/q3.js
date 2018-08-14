/**
 * Crie um componente que tenha uma caixa de texto que só aceita números e tenha o rótulo (label) Calcular o fatorial de.
 * O componente deve ainda possuir um botão calcular que quando acionado deve calcular o fatorial do número digitado,
 * imprimido o resultado e o tempo necessário para a execução.
 * (Dica: usar o objeto javascript Date)
 * O resultado deve ser mostrado no formato 53! = XXXXXX (yyy milisegundos);
 * O código deve calcular o fatorial e não apenas imprimir uma string com a resposta.
 */
 (function(){
  console.log("Questao 3");

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
    createInputElement('number','alunos','alunos','Quantidade de Alunos:',form);
    breakRow(form);
    // botao
    createButton("relatorio", "button", "Criar Relatório", form);
    // Insere o form no documento
    document.getElementById('q3').appendChild(form);
  }

  // função contrustora
  function Aluno() {

    var self = this;
    var s = Symbol();

    this.nr;
    this.nota = {};
    this.nota[s];

    this.getNr = function() {
      return self.nr;
    }

    this.setNr = function(nr) {
      self.nr = nr;
    }

    this.getNota = function() {
      return self.nota[s];
    }

    this.setNota = function(nota) {
      self.nota[s] = nota;
    }
  }

  function randonNumbers(min, max) {
    return Math.floor(Math.random() * ((max+1) - min)) + min;
  }
  //var aluno = new Aluno();
  //console.log(aluno);
  //console.log(aluno.setNr(1));
  //console.log(aluno.setNota(5));
  //console.log(aluno);

  function regAlunos(tam) {
    var alunos = [];
    for (i = 0; i < tam; i++ ) {
      var aluno = new Aluno();
      aluno.setNr(i+1);
      aluno.setNota(randonNumbers(0, 100));

      alunos.push(aluno);
    }
    return alunos;
  }

  function relatorio(arr) {
    var aprov = 0;
    var reprov = 0;
    let qtdAlunos = arr.length;
    var s = "<p>Relatório Final<p>";
    s = s + "<table>";
    for (var item of arr) {
      if (item.getNota() >= 60) {
        var status = "APROVADO";
        aprov = aprov + 1;
      } else {
        var status = "REPROVADO"
        reprov = reprov + 1;
      }
      s = s + "<tr><td>Aluno nr " + item.getNr() + "</td><td> Nota " + item.getNota() + "</td><td>" + status +  "</td><tr>";
    }

    var aprovados = (aprov / qtdAlunos) * 100;
    var reprovados = (reprov / qtdAlunos) * 100;

    s = s + "<tr><td colspan='3'>APROVADOS: " + aprov + " (" + aprovados +"%) | REPROVADOS: " + reprov + " (" + reprovados + "%)</td></tr>";
    s = s + "</table>";

    return s;
  }

  return (function(){
    createForm();
    var send = document.getElementsByName('relatorio');

    send[0].onclick = function() {
      var v = document.querySelector('#alunos');
      var n = parseInt(v.value, 10);
      if (n) {
        var resposta = relatorio(regAlunos(20));
        var msg = document.createElement("div");
        document.getElementById('q3').appendChild(msg).innerHTML = resposta;
      } else {
        alert("Insira um valor!");
      }
    }

  })();

})();




