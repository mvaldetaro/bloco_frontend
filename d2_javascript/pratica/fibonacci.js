// A0 =  0, A1 = 1, An, tq n>1 An = dsoma dos dois anteriores

function fibonacci(n) {
  // C elemento calculado, B elemento anterior, A elementos antes
  let a = 0, b = 1, c;
  let num = Array(n);
  num[0] = a;
  num[1] = b;
  for (let i = 2; i<n; i++) {
    c = a + b;
    num[i] = a + b;
    a = b;
    b = c;
    return num;
  }
}

let r = fibonacci(10);
console.log(r);
