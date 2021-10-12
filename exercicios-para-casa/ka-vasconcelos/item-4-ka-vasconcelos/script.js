const body = document.querySelector("body");
const formulario = document.querySelector("form");
const inputNome = document.querySelector("#campoNome");
const inputSenha = document.querySelector("#campoSenha");
const botao = document.querySelector("button");

let novaDiv = document.createElement('div');
body.appendChild(novaDiv);
let novoTexto = document.createTextNode('Sem permissão');
novaDiv.appendChild(novoTexto);

//ITEM 4

formulario.addEventListener("submit", entrarMsg);

function entrarMsg(evento) {
    evento.preventDefault();

    const inputNomeValor = inputNome.value;
    const inputSenhaValor = inputSenha.value;

    novaDiv.removeChild(novoTexto);
    let resultado = document.createElement("p");
    novaDiv.appendChild(resultado);
    resultado.innerText = `Olá ${inputNomeValor}`

}