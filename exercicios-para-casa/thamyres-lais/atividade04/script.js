const formulario = document.querySelector("form");
const inputUm = document.querySelector("#usuario");
const inputDois = document.querySelector("#senha");
const botaoForm = document.querySelector("form button");
const mensagemLogin = document.querySelector("#mensagemLogin");


function submit(evento) {
    evento.preventDefault();

    const usuarioValue = Text (inputUm.value);
    const senhaValue = Text (inputDois.value);
    console.log("usuário: ", usuarioValue, "\n senha: ", senhaValue);
    
    if (usuarioValue == thamyreslais && senha == escle){
        document.write ('Olá!')
    } else{
        document.write('sem permissão')
    }
}



formulario.addEventListener("submit", submit)