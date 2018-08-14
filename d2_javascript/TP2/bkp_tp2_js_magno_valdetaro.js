// Algoritmo 01 Contar e imprimir quantos números existem entre 0 e 1.000.000
// (exclusives*) que sejam múltiplos de 2 e 3 simultaneamente.
console.log("Resultado Algoritmo 1");

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

console.log(multiplos2Valores(2, 3)  + "\n");

// Algoritmo 02 Calcular o fatorial de 53, imprimido o resultado e o tempo necessário para a execução.
// (Dica: usar o objeto javascript Date)
console.log("Resultado Algoritmo 2");

function fatorial(n) {
  var msInicio = new Date().getMilliseconds();
  var f = 1;

  for(var i = 1; i <= n; i++){
    f = f*i;
  }

  var msFinal = new Date().getMilliseconds();
  var ms =  msFinal - msInicio;

  return "53! = " + f + " ("+ms+ " milesegundos)\n";
}

console.log(fatorial(53).toString());

// Algoritmo 03 - Imprimir um relatório de resultados da disciplina javascript para 20 alunos.
// - As notas deverão ser números inteiros entre 0 e 100, criadas aleatoriamente;
// - Cada aluno deve ser representado por um registro composto por nr e nota;
// - Os registros devem ser armazenados em um array;
// - A impressão do relatório deve ter um título, os resultados mostrados linha a linha
//   no formato "Aluno nr xx - Nota yy [(A/RE)PROVADO]" e um rodapé no com estatística final
//   no formato "APROVADOS: XX (xx%) | REPROVADOS: YY (yy%)"
console.log("Algoritmo 3");

function relatorio() {

}

// Algoritmo 04 Criar um arrays com 1.000 números aleatórios não repetidos e ordená-los.
// Os números devem estar entre 0 e 5.000 (inclusives, ou seja incluindo o 0 e o 5.000).
console.log("Algoritmo 4");

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

//console.log(createArray(50, 0, 500));

// sortNumbers recebe um array como parametro
function sortNumbers(arr) {
  var t = arr.length;
  var temp;

  for (var i = 0; i <= t; i++) {
    for (var j = 0; i <= t-1; j++) {
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

var arr = createArray(50, 0, 500);
console.log(sortNumbers(arr));

function createAndSort(){
  var numbers = [];

  return numbers;
}


// Algoritmo 05 Crie uma FUNÇÃO que receba 3 números inteiros e
//imprima que tipo de triângulo eles formam, equilátero, isósceles ou escaleno.
// Imprima o resultado da função para os valores (5,5,5), (45,45,90) e (25, 35, 45).
console.log("Algoritmo 5");

