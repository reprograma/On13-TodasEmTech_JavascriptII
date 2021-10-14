const nome = document.querySelector("#nome");
const senha = document.querySelector("#senha");
const botao = document.querySelector("#button");
const sessao = document.querySelector("section");


// - ETAPA3: Crie um novo elemento HTML usando o DOM, dê um valor para ele com o texto: `Sem permissão `, e adicione ele ao seu HTML;
// - ETAPA4: Adicione um evento para que após a usuária clique no botão com o texto  `entrar`, o novo elemento tenha o seu texto de `Sem permissão` substituído por: `Olá + o nome da pessoa`;  

let permissao = document.createElement('p');
permissao.textContent = "Sem permissão";

sessao.appendChild(permissao);

console.log(permissao);

botao.addEventListener("click", function(evento){
    evento.preventDefault();
    
    const inputValue = (`Olá, ${nome.value}`);
    permissao.textContent = inputValue;

    


})




