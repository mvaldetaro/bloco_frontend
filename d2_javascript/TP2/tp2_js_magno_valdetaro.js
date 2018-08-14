/**
 * Algoritmo 01 Contar e imprimir quantos números existem entre 0 e 1.000.000
 * (exclusives*) que sejam múltiplos de 2 e 3 simultaneamente.
 */

console.log("Iniciando Algoritmo Nr 1\n");

function multiplos2Valores(n1, n2){
  var r = 0;
  var temp = [];

  for (var i = 2; i < 10000; i++) {
    if (i%n1 == 0 && i%n2 == 0) {
      temp.push(i);
      r++
    }
  }

  return r;
}

//console.log(multiplos2Valores(2, 3)  + "\n");



/**
 * Algoritmo 02 Calcular o fatorial de 53, imprimido o resultado e o tempo necessário para a execução.
 * (Dica: usar o objeto javascript Date)
 */

console.log("Iniciando Algoritmo Nr 2\n");

function fatorial(n) {
  let msInicio = new Date().getMilliseconds();
  var f = 1;

  for(var i = 1; i <= n; i++){
    f = f*i;
  }

  let msFinal = new Date().getMilliseconds();
  let ms =  msFinal - msInicio;

  return "53! = " + f + " ("+ms+ " milesegundos)\n";
}

//console.log(fatorial(53).toString());



/**
 * Algoritmo 03 - Imprimir um relatório de resultados da disciplina javascript para 20 alunos.
 * - As notas deverão ser números inteiros entre 0 e 100, criadas aleatoriamente;
 * - Cada aluno deve ser representado por um registro composto por nr e nota;
 * - Os registros devem ser armazenados em um array;
 * - A impressão do relatório deve ter um título, os resultados mostrados linha a linha
 *      no formato "Aluno nr xx - Nota yy [(A/RE)PROVADO]" e um rodapé no com estatística final
 *      no formato "APROVADOS: XX (xx%) | REPROVADOS: YY (yy%)"
 */

console.log("Iniciando Algoritmo Nr 3\n");

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
  var s = "Relatório Final\n\n";

  for (var item of arr) {

    if (item.getNota() >= 60) {
      var status = "APROVADO";
      aprov = aprov + 1;
    } else {
      var status = "REPROVADO"
      reprov = reprov + 1;
    }

    var r = "Aluno nr " + item.getNr() + " - Nota " + item.getNota() + " " + status + "\n";
    s = s + r;
  }

  var aprovados = (aprov / qtdAlunos) * 100;
  var reprovados = (reprov / qtdAlunos) * 100;

  s = s + "\nAPROVADOS: " + aprov + " (" + aprovados +"%) | REPROVADOS: " + reprov + " (" + reprovados + "%)\n";

  return s;
}

console.log(relatorio(regAlunos(20)));




/**
 * Algoritmo 04 Criar um arrays com 1.000 números aleatórios não repetidos e ordená-los.
 * Os números devem estar entre 0 e 5.000 (inclusives, ou seja incluindo o 0 e o 5.000).
 */

console.log("Iniciando Algoritmo Nr 4\n");

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


/**
 * Algoritmo 05 Crie uma FUNÇÃO que receba 3 números inteiros e
 * imprima que tipo de triângulo eles formam, equilátero, isósceles ou escaleno.
 * Imprima o resultado da função para os valores (5,5,5), (45,45,90) e (25, 35, 45).
 */

console.log("Iniciando Algoritmo Nr 5\n");

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

//console.log(tri(5,5,5));
//console.log(tri(45,45,90));
//console.log(tri(25,35,45));
