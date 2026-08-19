/*
  EXERCÍCIO 06 — ARROW FUNCTIONS
*/

// TODO:
// Reescreva as funções abaixo utilizando arrow functions.

const somar = (a, b) => a + b;

const subtrair = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => b === 0 || a === 0 ? 'erro' : a/b 

// TODO:
// Identifique quais funções podem utilizar retorno implícito.

// TODO:
// Crie uma arrow function calcular() mantendo o comportamento do exercício anterior.

const calcular = (a, b, operacao) => {
if (operacao === "soma") return somar(a, b)
if (operacao === "subtração") return subtrair(a, b)
if (operacao === "divisão") return dividir(a, b)
if (operacao === "multiplicar") return multiplicar(a, b)
else {
  console.log('operação desconhecida')
}

console.log(operacao(18, 8, "somar"))
console.log(operacao(0, 5, "dividir"))
console.log(operacao(6, 20, "multiplicar"))
console.log(operacao(50, 20, "subtrair"))
console.log(operacao(14, 2, "dividir"))

}

