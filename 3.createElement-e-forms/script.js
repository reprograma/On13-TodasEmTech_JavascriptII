const formulario = document.querySelector("form");
const inputUm = document.querySelector("#num1");
const inputDois = document.querySelector("#num2");
const botaoForm = document.querySelector(" form button");
const caiaxaResultado = document.querySelector("#caixaResultado");

function submit(evento) {
    evento.preventDefault();
    const num1Value = number(inputUm.Value);
    const num2Value = number(inputDois.Value);
    //console.log("numero 1:", num1Value, "\n numero 2:", num2Value)
    const total = num1Value + num2Value;
    let resultado = document.createElement('p');
    resultado.innerText = 'o resultado de ${num1Value}+${num2Value} é =${total}'
}

formulario.addEventListener("submit", submit)