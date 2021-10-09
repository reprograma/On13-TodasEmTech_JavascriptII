const formulario = document.querySelector("form");
const nome = document.querySelector("#nome");
const login = document.querySelector("#senhaUsuario");
const botaoForm = document.querySelector(" form button");
const footer = document.querySelector("#mensagemFinal");

function submit(evento) {
    evento.preventDefault();
    const nome1Value = Text(nomeUm.Value);
    const nome2Value = text(inomeDois.Value);
    //console.log("numero 1:", num1Value, "\n numero 2:", num2Value)

    let novaMensagem = document.createElement('p');
    novaMensagem.innerText = "not allowed"
    mensagemFinal.appendChild(novaMensagem)


}

formulario.addEventListener("submit", submit)