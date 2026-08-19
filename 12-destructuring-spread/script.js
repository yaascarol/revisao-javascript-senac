/*
  EXERCÍCIO 12 — DESTRUCTURING E SPREAD
*/

const aluno = {
  nome: "Marina",
  idade: 22,
  curso: "Desenvolvimento Web",
  notas: [8.5, 7.0, 9.0],
  situacao: "Em análise",
};

// TODO:
// Extraia nome, curso e notas utilizando destructuring.

const {nome, curso, notas} = aluno

// TODO:
// Calcule a média das notas.
//const {notas} = nota[]

//const nota1 = notas[0]
//const nota2 = notas[1]
//const nota3 = notas[2]

//const media = (nota1 + nota2 + nota3) / notas.length.toFixed(2)

const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length


// TODO:
// Crie um NOVO objeto chamado alunoAtualizado usando spread.

const alunoAtualizado = {
  ...aluno,
  media,
  situacao: media >= 6 ? 'Aprovado' : 'Reprovado'
}

console.log(JSON.stringify(alunoAtualizado, null, 2))

// alunoAtualizado deve:
// - manter os dados anteriores;
// - adicionar a propriedade media;
// - alterar a situacao.

// IMPORTANTE:
// Não modifique o objeto aluno diretamente.

// TODO:
// Exiba os dois objetos para comparação.
