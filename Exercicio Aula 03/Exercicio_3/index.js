const Calculadora = require('./calculadora');

var somarCalculadora = Calculadora.soma(2,3);
var subtrairCalculadora = Calculadora.subtracao(6,4);
var multiplicarCalculadora = Calculadora.multiplicacao(5,2);
var dividirCalculadora = Calculadora.divisao(10,2);

console.log(somarCalculadora);
console.log(subtrairCalculadora);
console.log(multiplicarCalculadora);
console.log(dividirCalculadora);