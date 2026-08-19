/*
  EXERCÍCIO 01 — CADASTRO BÁSICO DE USUÁRIO
*/

// TODO 1:
// Crie uma constante para armazenar o nome do usuário.
let  nomeUser = `yasmin`;
// TODO 2:
// Crie uma variável para armazenar a idade.
let  idade = 27;

// TODO 3:
// Crie uma constante para o e-mail.
let  email = "yasmin@gmail.com";

// TODO 4:
// Crie uma variável booleana indicando se o usuário está logado.
let  userLogado = true;

// TODO 5:
// Crie uma variável chamada ultimoAcesso.
// Defina um valor adequado entre null ou undefined e pense no motivo.
let  ultimoAcesso = null;

// TODO 6:
// Mostre no console uma frase contendo todos os dados usando template literal.
print(`Nome do usuário: ${nomeUser} || Idade: ${idade} ||
  Email: ${email} || Está logado? ${userLogado}
  || Ultimo acesso: ${ultimoAcesso}`)

// TODO 7:
// Utilize typeof para verificar o tipo de cada variável criada.
print(trypeof(nomeUser))
print(trypeof(idade))
print(trypeof(email))
print(trypeof(userLogado))
print(trypeof(ultimoAcesso))
