const operation = require('./operation.js');

console.log(operation);

x1 = 6;
x2 = 2;

som = operation.somar(x1,x2);
sub = operation.subtrair(x1,x2);
mult = operation.multiplicar(x1,x2);
div = operation.dividir(x1,x2);


console.log("Soma:", som);
console.log("Subtração:", sub);
console.log("Multiplicação:", mult);
console.log("Divisão:", div);
