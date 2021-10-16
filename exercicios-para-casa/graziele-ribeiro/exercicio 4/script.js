// ETAPA2: Use o DOM com o javascript para selecionar os campos de input e o botão; 
const formulario = document.querySelector('form');
const inputNome = document.getElementsByTagName('nome');
const inputSenha = document.getElementsByTagName('senha');
const botao = document.querySelector('button');


// ETAPA3: Crie um novo elemento HTML usando o DOM, dê um valor para ele com o texto: `Sem permissão `, e adicione ele ao seu HTML;


var divNova = document.createElement('div');
var conteudoNovo = document.createTextNode('Sem Permisão');
divNova.appendChild(conteudoNovo);
formulario.appendChild(divNova);


// ETAPA4: Adicione um evento para que após a usuária clique no botão com o texto  `entrar`, o novo elemento tenha o seu texto de `Sem permissão` substituído por: `Olá + o nome da pessoa`;
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    divNova.innerHTML = `Olá `
})


