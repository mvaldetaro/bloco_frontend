function criarVetorAleatorio(qtd, min, max) {
  let n = Array(qtd);
  let i = 0;
  while(i < qtd){
    n[i] = Math.floor((Math.random()*(max - min)) + min);
    i++;
  }
  return n;
}

function inverteVetor(v) {
  let v2 = Array(v.length);
  for(let i = 0; i<v.length; i++) {
    v2[v.length - 1 - i] = v[i];
  }
  return v2;
}

console.log('Array original');
let v = criarVetorAleatorio(10, 500, 1500);
console.log(v);

console.log('Array invertido');
console.log(inverteVetor(v));
