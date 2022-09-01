const Calc = require('./src/calculadora');

let multiplicacao = Calc.multiplicacao(2,2);
let divisao = Calc.divisao(2,2);
let soma = Calc.soma(2,2);
let subtracao = Calc.subtracao(2,2);
let eleva = Calc.eleva(2,2);

console.log("multiplicacao: ", multiplicacao);
console.log("divisao: ", divisao);
console.log("soma: ", soma);
console.log("subtracao: ", subtracao);
console.log("eleva: ", eleva);
