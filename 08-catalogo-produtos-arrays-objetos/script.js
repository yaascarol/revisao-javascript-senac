/*
  EXERCÍCIO 08 — CATÁLOGO DE PRODUTOS
*/

// TODO:
// Crie um array chamado produtos com pelo menos 5 objetos.
//
// Cada produto deve possuir:
// id
// nome
// preco
// categoria
// emEstoque

const produtos = [
  {
    id: 1,
    nome: "Notebook Gamer",
    preco: 5999.90,
    categoria: "Informática",
    emEstoque: true
  },
  {
    id: 2,
    nome: "Smartphone 5G",
    preco: 3499.00,
    categoria: "Eletrônicos",
    emEstoque: true
  },
  {
    id: 3,
    nome: "Cafeteira Elétrica",
    preco: 299.90,
    categoria: "Eletrodomésticos",
    emEstoque: false
  },
  {
    id: 4,
    nome: "Fone Bluetooth",
    preco: 199.90,
    categoria: "Acessórios",
    emEstoque: true
  },
  {
    id: 5,
    nome: "Monitor 27''",
    preco: 1299.00,
    categoria: "Informática",
    emEstoque: false
  }
];


// TODO:
// Percorra o array com for, for...of ou forEach().
//in = percorre os indices do array
for (prod in produtos){
  console.log(prod)
}
// of = acessa  os valores do array

for (prod of produtos){
  console.log(prod)
}

//foreach = cada elemento

produtos.forEach(produto => {
  console.log(
    `ID: ${produto.id} 
    | ${produto.nome}
    | Categoria: ${produto.categoria} 
    | Preço: R$ ${produto.preco.toFixed(2)} 
    | Em estoque: ${produto.emEstoque ? "Sim" : "Não"}`
  );
});

// TODO:
// Para cada item, mostre no console uma frase formatada
// contendo as informações do produto.
