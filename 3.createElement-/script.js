const formulario = document.querySelector("form");
const inputUm = document.querySelector("#num1");
const inputDois = document.querySelector("#num2");
const botaoForm = document.querySelector("form button");
const caixaResultado = document.querySelector("#caixaResultado");



function submit(evento) {
    evento.preventDefault();

    const num1Value = Number (inputUm.value);
    const num2Value = Number (inputDois.value);
    console.log("numero 1: ", num1Value, "\n numero 2: ", num2Value);
    
}

formulario.addEventListener("submit", submit)