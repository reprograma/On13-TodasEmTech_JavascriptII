// ETAPA 2
const input = document.querySelector("input");
const body = document.querySelector("body");
const form = document.querySelector("form");

// ETAPA 3

let div = document.createElement('div');
let text = document.createTextNode("Sem Permissão");
div.appendChild(text);
body.appendChild(div);

// ETAPA 4
form.addEventListener("submit", function(e){
    e.preventDefault();
    div.innerHTML = `Olá ${input.value}`
})
