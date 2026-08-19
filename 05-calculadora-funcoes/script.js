/*
  EXERCÍCIO 05 — CALCULADORA UTILIZANDO FUNÇÕES
*/

function somar(a, b) {
  // TODO
  return a + b
}

function subtrair(a, b) {
  // TODO
  return a - b
}

function multiplicar(a, b) {
  // TODO
  return a * b
}

function dividir(a, b) {
  // TODO:
  // Trate divisão por zero.
  if (a === 0 || b === 0){
    return "err0"
  }
  return a / b
}

let resultado;

function calcular(a, b, operacao) {
  // TODO:
  // Escolha a função correta conforme a operação.
switch (operacao){
  case "somar":
    return somar(a, b)
  case "subtrair":
    return subtrair(a, b)
  case "multiplicar":
    return multiplicar(a, b)
  case "dividir":
    return dividir(a, b)
  default:
    return "Erro, operação inválida"
}
  // Trate também uma operação desconhecida.
}

// TODO:
// Faça alguns testes com calcular().
console.log(calcular(18, 8, "somar"))
console.log(calcular(0, 5, "dividir"))
console.log(calcular(6, 20, "multiplicar"))
console.log(calcular(50, 20, "subtrair"))
console.log(calcular(14, 2, "dividir"))
